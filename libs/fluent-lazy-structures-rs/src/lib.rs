//! On-demand, concurrently populated lookup structures for async streams:
//! the Rust sibling of the `@fluent-iterable/lazy-structures` TypeScript
//! plugin (see <https://github.com/codibre/fluent-iterable/issues/100> for
//! the shared semantics).
//!
//! [`LazyMap`] is an O(1) lookup map filled by a producer stream running
//! concurrently with the consumer. Construction is inert: nothing is polled
//! until [`LazyMap::start`] (or the first [`LazyMap::get`], which starts
//! consumption implicitly). Keys already produced are served immediately;
//! a key not produced yet suspends only that caller until the producer
//! inserts it or the stream terminates.
//!
//! Suitable for memory-bounded datasets with high per-item I/O latency (e.g.
//! a database cursor joined with a paginated external API). Not suitable for
//! unbounded streams (the whole producer output is cached: there is no
//! backpressure between producer and consumer) nor for low-latency in-memory
//! sources, where synchronization overhead outweighs the latency overlap.
//!
//! ```
//! use fluent_lazy_structures::LazyStructuresStreamExt;
//! use futures::stream;
//!
//! # async fn demo() {
//! let source = stream::iter(vec![1u32, 2, 3]);
//! let map = source.to_lazy_map(|item| *item, |item| item * 10);
//! map.start(); // idempotent; `get` would also start it implicitly
//! assert_eq!(&*map.get(&2).await.unwrap().unwrap(), &20);
//! // stream completed: missing keys resolve to None
//! assert_eq!(map.get(&99).await.unwrap().as_deref(), None::<&u32>);
//! # }
//! ```
//!
//! Note: [`LazyStructuresStreamExt`] (plain streams) and
//! [`TryLazyStructuresStreamExt`] (fallible streams) both provide
//! `to_lazy_map`; import one of them at a time (or disambiguate with a
//! fully-qualified call) to avoid method resolution ambiguity.

use std::convert::Infallible;
use std::hash::Hash;
use std::pin::Pin;
use std::sync::atomic::{AtomicBool, Ordering};
use std::sync::{Arc, Mutex, OnceLock};

use dashmap::DashMap;
use futures::{Stream, StreamExt, TryStream, TryStreamExt};
use tokio::sync::Notify;

type Producer<K, V, E> = Pin<Box<dyn Stream<Item = Result<(K, V), E>> + Send + 'static>>;

/// Map + flags shared between the [`LazyMap`] facade and the background
/// producer task.
struct State<K, V, E> {
    cache: Arc<DashMap<K, Arc<V>>>,
    notify: Arc<Notify>,
    started: AtomicBool,
    finished: AtomicBool,
    error: OnceLock<Arc<E>>,
}

/// An O(1) lookup map populated on demand by a producer stream.
///
/// See the [crate docs](crate) for the applicable scenarios. Dropping the
/// map aborts the background producer task, so resources are released
/// deterministically when a consumer bails out early.
pub struct LazyMap<K, V, E> {
    state: Arc<State<K, V, E>>,
    producer: Mutex<Option<Producer<K, V, E>>>,
    abort: OnceLock<tokio::task::AbortHandle>,
}

impl<K, V, E> LazyMap<K, V, E>
where
    K: Eq + Hash + Send + Sync + 'static,
    V: Send + Sync + 'static,
    E: Send + Sync + 'static,
{
    fn new(producer: Producer<K, V, E>) -> Self {
        Self {
            state: Arc::new(State {
                cache: Arc::new(DashMap::new()),
                notify: Arc::new(Notify::new()),
                started: AtomicBool::new(false),
                finished: AtomicBool::new(false),
                error: OnceLock::new(),
            }),
            producer: Mutex::new(Some(producer)),
            abort: OnceLock::new(),
        }
    }

    /// Begins consuming the producer stream in the background. Idempotent:
    /// `compare_exchange` guarantees at most one `tokio::spawn` ever runs.
    /// Returns `&Self` for chaining, but calling it as a statement is the
    /// normal usage.
    pub fn start(&self) -> &Self {
        let started =
            self.state
                .started
                .compare_exchange(false, true, Ordering::AcqRel, Ordering::Acquire);
        if started.is_err() {
            return self;
        }
        let producer = self.producer.lock().expect("LazyMap producer lock").take();
        if let Some(mut producer) = producer {
            let state = Arc::clone(&self.state);
            let task = tokio::spawn(async move {
                while let Some(item) = producer.next().await {
                    match item {
                        Ok((key, value)) => {
                            state.cache.insert(key, Arc::new(value));
                            state.notify.notify_waiters();
                        }
                        Err(error) => {
                            let _ = state.error.set(Arc::new(error));
                            state.finished.store(true, Ordering::Release);
                            state.notify.notify_waiters();
                            return;
                        }
                    }
                }
                state.finished.store(true, Ordering::Release);
                state.notify.notify_waiters();
            });
            let _ = self.abort.set(task.abort_handle());
        } else {
            // Producer already consumed (cannot happen while &self owns it):
            // mark the map finished so lookups never hang.
            state_finish(&self.state);
        }
        self
    }

    /// Looks a key up, starting consumption implicitly when needed.
    ///
    /// - Cache hit: the stored `Arc<V>` clone, with no channel allocated and
    ///   no suspension.
    /// - Miss on an active stream: the call waits until the key is inserted,
    ///   the stream completes (`Ok(None)`) or it fails (`Err`).
    /// - Miss on a completed stream: `Ok(None)` immediately.
    /// - Failed producer: `Err` with the captured error (sticky: every
    ///   lookup after a failure reports it, while keys produced before the
    ///   failure remain readable).
    pub async fn get(&self, key: &K) -> Result<Option<Arc<V>>, Arc<E>> {
        self.start();
        loop {
            let hit = self
                .state
                .cache
                .get(key)
                .map(|entry| Arc::clone(entry.value()));
            if let Some(value) = hit {
                return Ok(Some(value));
            }
            if let Some(error) = self.state.error.get() {
                return Err(Arc::clone(error));
            }
            if self.state.finished.load(Ordering::Acquire) {
                return Ok(None);
            }
            // Create the notification future before rechecking so a
            // concurrent insert can never slip between check and wait.
            let notified = self.state.notify.notified();
            let hit = self
                .state
                .cache
                .get(key)
                .map(|entry| Arc::clone(entry.value()));
            if let Some(value) = hit {
                return Ok(Some(value));
            }
            if let Some(error) = self.state.error.get() {
                return Err(Arc::clone(error));
            }
            if self.state.finished.load(Ordering::Acquire) {
                return Ok(None);
            }
            notified.await;
        }
    }
}

fn state_finish<K, V, E>(state: &State<K, V, E>) {
    state.finished.store(true, Ordering::Release);
    state.notify.notify_waiters();
}

impl<K, V, E> Drop for LazyMap<K, V, E> {
    fn drop(&mut self) {
        // Deterministic cleanup: a consumer that walks away never leaves the
        // producer task fetching rows nobody will read.
        if let Some(handle) = self.abort.get() {
            handle.abort();
        }
    }
}

/// `to_lazy_map` for plain (infallible) streams. Fallible streams should
/// use [`TryLazyStructuresStreamExt`] instead, so producer errors reach the
/// lookup error channel; for streams imported here the error type is
/// [`Infallible`].
pub trait LazyStructuresStreamExt: Stream + Send + Sized + 'static
where
    Self::Item: Send + 'static,
{
    /// Creates a [`LazyMap`] fed by this stream. Inert until `start()` or
    /// the first `get()`.
    fn to_lazy_map<K, V, KF, VF>(self, key_fn: KF, val_fn: VF) -> LazyMap<K, V, Infallible>
    where
        K: Eq + Hash + Send + Sync + 'static,
        V: Send + Sync + 'static,
        KF: Fn(&Self::Item) -> K + Send + Sync + 'static,
        VF: Fn(&Self::Item) -> V + Send + Sync + 'static;
}

impl<S> LazyStructuresStreamExt for S
where
    S: Stream + Send + Sized + 'static,
    S::Item: Send + 'static,
{
    fn to_lazy_map<K, V, KF, VF>(self, key_fn: KF, val_fn: VF) -> LazyMap<K, V, Infallible>
    where
        K: Eq + Hash + Send + Sync + 'static,
        V: Send + Sync + 'static,
        KF: Fn(&Self::Item) -> K + Send + Sync + 'static,
        VF: Fn(&Self::Item) -> V + Send + Sync + 'static,
    {
        let producer = self
            .map(move |item| -> Result<(K, V), Infallible> { Ok((key_fn(&item), val_fn(&item))) });
        LazyMap::new(Box::pin(producer))
    }
}

/// `to_lazy_map` for fallible streams ([`TryStream`]): producer errors flow
/// into the [`LazyMap::get`] error channel.
pub trait TryLazyStructuresStreamExt: TryStream + Send + Sized + 'static
where
    Self::Ok: Send + 'static,
    Self::Error: Send + Sync + 'static,
{
    /// Creates a [`LazyMap`] fed by this fallible stream. Inert until
    /// `start()` or the first `get()`.
    fn to_lazy_map<K, V, KF, VF>(self, key_fn: KF, val_fn: VF) -> LazyMap<K, V, Self::Error>
    where
        K: Eq + Hash + Send + Sync + 'static,
        V: Send + Sync + 'static,
        KF: Fn(&Self::Ok) -> K + Send + Sync + 'static,
        VF: Fn(&Self::Ok) -> V + Send + Sync + 'static;
}

impl<S> TryLazyStructuresStreamExt for S
where
    S: TryStream + Send + Sized + 'static,
    S::Ok: Send + 'static,
    S::Error: Send + Sync + 'static,
{
    fn to_lazy_map<K, V, KF, VF>(self, key_fn: KF, val_fn: VF) -> LazyMap<K, V, Self::Error>
    where
        K: Eq + Hash + Send + Sync + 'static,
        V: Send + Sync + 'static,
        KF: Fn(&Self::Ok) -> K + Send + Sync + 'static,
        VF: Fn(&Self::Ok) -> V + Send + Sync + 'static,
    {
        let producer = self.map_ok(move |item| -> (K, V) { (key_fn(&item), val_fn(&item)) });
        LazyMap::new(Box::pin(producer))
    }
}
