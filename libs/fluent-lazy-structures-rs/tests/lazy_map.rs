//! Integration tests for [`fluent_lazy_structures::LazyMap`] (issue #100
//! shared semantics: inert construction, idempotent start, suspension on
//! misses, sticky error propagation, deterministic cleanup).

use std::sync::atomic::{AtomicBool, AtomicUsize, Ordering};
use std::sync::Arc;
use std::task::{Context, Poll};

use fluent_lazy_structures::LazyStructuresStreamExt;
use futures::{Stream, StreamExt};
use tokio::time::{sleep, Duration};

fn slow<S>(stream: S, ms: u64) -> std::pin::Pin<Box<dyn Stream<Item = S::Item> + Send + 'static>>
where
    S: Stream + Send + 'static,
    S::Item: Send + 'static,
{
    Box::pin(stream.then(move |item| async move {
        sleep(Duration::from_millis(ms)).await;
        item
    }))
}

#[tokio::test]
async fn construction_is_inert() {
    let pulled = Arc::new(AtomicUsize::new(0));
    let counter = Arc::clone(&pulled);
    let source = futures::stream::iter(vec![1u32, 2, 3]).inspect(move |_| {
        counter.fetch_add(1, Ordering::Relaxed);
    });
    let map = source.to_lazy_map(|item| *item, |item| item * 10);
    // Nothing polled the producer stream without start()/get().
    assert_eq!(pulled.load(Ordering::Relaxed), 0);
    map.start();
    sleep(Duration::from_millis(30)).await;
    assert_eq!(pulled.load(Ordering::Relaxed), 3);
}

#[tokio::test]
async fn serves_produced_values_and_none_after_completion() {
    let map = futures::stream::iter(vec![1u32, 2, 3]).to_lazy_map(|item| *item, |item| item * 10);
    map.start();
    let two = map.get(&2).await.unwrap().expect("missing key 2");
    assert_eq!(&*two, &20);
    // Stream completed: unknown keys resolve to None, never hang.
    assert_eq!(map.get(&99).await.unwrap().as_deref(), None::<&u32>);
}

#[tokio::test]
async fn miss_suspends_only_its_callers_until_the_key_arrives() {
    let map = slow(futures::stream::iter(vec![1u32, 2, 3]), 20)
        .to_lazy_map(|item| *item, |item| item * 10);
    // Implicit start via the lookups themselves; concurrent waiters on one key.
    let (late_a, late_b, early) =
        futures::future::join3(map.get(&3), map.get(&3), map.get(&1)).await;
    assert_eq!(&*late_a.unwrap().unwrap(), &30);
    assert_eq!(&*late_b.unwrap().unwrap(), &30);
    assert_eq!(&*early.unwrap().unwrap(), &10);
}

#[tokio::test]
async fn producer_errors_wake_waiters_and_stay_sticky() {
    let source: Vec<Result<u32, &'static str>> = vec![Ok(1), Ok(2), Err("cursor died")];
    // Qualified Try call: producer errors must flow into the lookup channel.
    let map = fluent_lazy_structures::TryLazyStructuresStreamExt::to_lazy_map(
        slow(futures::stream::iter(source), 10),
        |item| *item,
        |item| item * 10,
    );
    map.start();
    let pending = map.get(&99);
    let produced = map.get(&2);
    let (pending, produced) = futures::future::join(pending, produced).await;
    // Waiters fail fast once the stream fails...
    assert_eq!(*pending.unwrap_err(), "cursor died");
    // ...while data produced before the failure stays readable...
    assert_eq!(&*produced.unwrap().unwrap(), &20);
    // ...and later lookups keep reporting the same captured error.
    assert_eq!(*map.get(&98).await.unwrap_err(), "cursor died");
    assert_eq!(&*map.get(&1).await.unwrap().unwrap(), &10);
}

#[tokio::test]
async fn start_is_idempotent() {
    let pulled = Arc::new(AtomicUsize::new(0));
    let counter = Arc::clone(&pulled);
    let source = slow(futures::stream::iter(vec![1u32, 2, 3]), 10).inspect(move |_| {
        counter.fetch_add(1, Ordering::Relaxed);
    });
    let map = source.to_lazy_map(|item| *item, |item| item * 10);
    map.start().start().start();
    map.start();
    sleep(Duration::from_millis(60)).await;
    // Each item was consumed exactly once despite four start() calls.
    assert_eq!(pulled.load(Ordering::Relaxed), 3);
}

#[tokio::test]
async fn dropping_the_map_aborts_the_producer() {
    let dropped = Arc::new(AtomicBool::new(false));
    let flag = Arc::clone(&dropped);
    let endless = slow(futures::stream::repeat(1u32), 5);
    {
        let map = FlaggedDrop {
            inner: endless,
            flag,
        }
        .to_lazy_map(|item| *item, |item| *item);
        map.start();
        sleep(Duration::from_millis(20)).await;
        assert!(!dropped.load(Ordering::Relaxed));
    }
    sleep(Duration::from_millis(20)).await;
    // LazyMap drop aborted the task, which released the boxed stream.
    assert!(dropped.load(Ordering::Relaxed));
}

#[tokio::test]
async fn try_streams_flow_errors_into_the_lookup_channel() {
    let source = futures::stream::iter(vec![Ok::<u32, &'static str>(1), Err("bad page")]);
    // Qualified call: both extension traits define `to_lazy_map`, so this
    // test picks the Try variant explicitly instead of importing it.
    let map = fluent_lazy_structures::TryLazyStructuresStreamExt::to_lazy_map(
        source,
        |item| *item,
        |item| item * 10,
    );
    map.start();
    assert_eq!(&*map.get(&1).await.unwrap().unwrap(), &10);
    assert_eq!(*map.get(&2).await.unwrap_err(), "bad page");
}

/// Wrapper that reports when the boxed producer is released.
struct FlaggedDrop<S> {
    inner: S,
    flag: Arc<AtomicBool>,
}

impl<S: Stream + Unpin> Stream for FlaggedDrop<S> {
    type Item = S::Item;

    fn poll_next(mut self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Option<S::Item>> {
        self.inner.poll_next_unpin(cx)
    }
}

impl<S> Drop for FlaggedDrop<S> {
    fn drop(&mut self) {
        self.flag.store(true, Ordering::Release);
    }
}

use std::pin::Pin;
