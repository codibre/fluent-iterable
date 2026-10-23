//! Fluent extension trait for [`std::iter::Iterator`] — the Rust port of the
//! [`@codibre/fluent-iterable`](https://www.npmjs.com/package/@codibre/fluent-iterable)
//! vocabulary.
//!
//! JavaScript got a fluent iterator chain protocol that Node's standard
//! library never shipped, so this library ships the *same vocabulary* for
//! Rust on the one mechanism the language actually has: an extension trait
//! with a blanket impl over every [`Iterator`]. No wrapper type, no DSL —
//! chain onto any iterator you already have.
//!
//! ```
//! use fluent_iterable::FluentIter;
//!
//! let rows = [("sa", 10), ("sp", 30), ("sa", 25)];
//! let by_state: Vec<(&str, Vec<(&str, i32)>)> =
//!     rows.into_iter().group_by_stable(|(s, _)| *s).collect();
//! assert_eq!(by_state[0].1, vec![("sa", 10), ("sa", 25)]);
//!
//! let report = rows
//!     .into_iter()
//!     .map(|(_, v)| v)
//!     .join_by(|v| format!("{v:>4}"), " | ");
//! assert_eq!(report, "  10 |   30 |   25");
//! ```
//!
//! # npm ⇄ Rust map
//!
//! Only the operations that `std` lacks live here. Everything else already
//! has a native spelling — using it keeps code idiomatic:
//!
//! | npm fluent-iterable            | Rust                                        |
//! |--------------------------------|---------------------------------------------|
//! | `.map/.filter`                 | [`Iterator::map`] / [`Iterator::filter`]     |
//! | `.flatMap` / `.flatten`        | [`Iterator::flat_map`]                       |
//! | `.mapNotNull` / pick-maps      | [`Iterator::filter_map`]                     |
//! | `.first()`                     | [`Iterator::next`] / [`Iterator::find`]      |
//! | `.last()`                      | `.next_back()` (double-ended) or fold        |
//! | `.some(p)` / `.every(p)`       | [`Iterator::any`] / [`Iterator::all`]        |
//! | `.take/.skip/.takeWhile/.skipWhile` | same names on [`Iterator`]              |
//! | `.count()`                     | [`Iterator::count`]                          |
//! | `.sum()` / `.min()` / `.max()` | [`Iterator::sum`] / [`Iterator::min`] / [`Iterator::max`] |
//! | `.reduce(r, i)`                | [`Iterator::fold`]                           |
//! | `.partition(n)`                | [`slice::chunks`](std::slice::chunks)        |
//! | `.concat/.append/.prepend`     | [`Iterator::chain`]                          |
//! | `.withIndex()`                 | [`Iterator::enumerate`]                      |
//! | `.toArray()`                   | [`Iterator::collect`]                        |
//! | `.toSet()`                     | `.collect::<std::collections::HashSet<_>>()` |
//! | `.group(keyFn)`                | [`FluentIter::group_by_stable`]              |
//! | `.combine(other, ka, kb)`      | [`FluentIter::combine`]                      |
//! | `.combineJoin(baseKey)`        | [`FluentIter::combine_join`]                 |
//! | `.distinct(keyFn?)`            | [`FluentIter::distinct_by`] / [`FluentIter::distinct`] |
//! | `.isDistinct(keyFn?)`          | [`FluentIter::is_distinct_by`] / [`FluentIter::is_distinct`] |
//! | `.toMap(k, v)`                 | [`FluentIter::to_map_by`]                    |
//! | `.toMapChain(k1, k2)`          | [`FluentIter::to_map_chain`] (depth 2)       |
//! | `.toMapChainReduce(…)`         | [`FluentIter::to_map_chain_reduce`] (depth 2)|
//! | `.join(sep, mapFn?)`           | [`FluentIter::join`] / [`FluentIter::join_by`] |
//! | `.avg(mapFn?)`                 | [`FluentIter::avg`] / [`FluentIter::avg_by`] |
//! | `.sort(cmp?)`                  | [`FluentIter::sorted`] / [`FluentIter::sort_with`] |
//! | `.sortBy(key…)`                | [`FluentIter::sort_by`] / [`FluentIter::sort_by_desc`] |
//! | `.hasExactly(n)`               | [`FluentIter::has_exactly`]                  |
//! | `.hasLessThan(n)`              | [`FluentIter::has_less_than`]                |
//! | `.hasLessOrExactly(n)`         | [`FluentIter::has_less_or_exactly`]          |
//! | `.hasMoreThan(n)`              | [`FluentIter::has_more_than`]                |
//! | `.hasMoreOrExactly(n)`         | [`FluentIter::has_more_or_exactly`]          |
//! | `.reduceAndMap(r, i, m)`       | [`FluentIter::reduce_and_map`]               |
//! | `.contains(item)`              | [`FluentIter::contains`]                     |
//! | `.whenEmpty(fb)`               | [`FluentIter::when_empty`]                   |
//! | `.repeat(n)`                   | [`FluentIter::repeat`]                       |
//! | `.top(proj, cmp)`              | `.max_by_key` / `.max_by`                    |
//!
//! # What is deliberately *not* ported (and why)
//!
//! | npm surface                                  | reason |
//! |----------------------------------------------|--------|
//! | every `*Async` operation, `flatMerge`        | stable Rust has no `AsyncIterator` trait; generic async iteration is unexpressible. Revisit when the language lands it. |
//! | `emit` / `catch` / `finally` / `execute` / `waitAll` | JS emitter/lifecycle surface. `Result`, `Drop` and dedicated stream crates own this in Rust. |
//! | `toObject` / `toObjectChain*` / `unwind`     | dynamic-property idioms; struct field selection via `flat_map` is the Rust answer. |
//! | `branch`                                     | needs fan-out buffering (`tee`); possible v2. |
//! | `distinct(key, choose, maxOccurrences)` extras | v1 keeps first-wins; a chooser/max-occurrences flavor can land later without breaking names. |
//! | `toMapChain` dynamic key depth               | JS nests to an arbitrary number of key functions; Rust fixes the concrete nested type at **depth 2**. Deeper nesting is a fold of depth-2 layers. |
//! | `avg()` returning `NaN` on empty             | Rust says it in the type: `Option<f64>`, `None` on empty. |
//! | `sort()` default comparator (stringified JS ordering) | Rust uses `Ord` ([`FluentIter::sorted`]) — numeric/lexicographic by the type's own ordering, never string coercion. |
//! | `combine` default-identity keys              | keys are explicit closures in Rust. |
//! | `whenEmpty` with a differently-typed fallback | the fallback must yield the same `Item` type; map it first. |
//!
//! # Laziness
//!
//! Adapters ([`FluentIter::distinct`], [`FluentIter::when_empty`],
//! [`FluentIter::repeat`]) stream and short-circuit like `std` adapters.
//! Terminals that need the whole sequence (`group_by_stable`, `combine`,
//! `sort*`, `to_map*`) return owned `Vec`/`HashMap` directly — the JS side
//! materializes at these points anyway, and materializing keeps the order
//! semantics exact and obvious.

use std::cmp::Ordering;
use std::collections::{HashMap, HashSet};
use std::fmt::Display;
use std::hash::Hash;

/// Streaming deduplication adapter behind [`FluentIter::distinct`].
///
/// Keeps the first occurrence of every item and drops later ones, holding
/// one [`HashSet`] of what has been seen — it never buffers the sequence.
#[derive(Debug)]
pub struct Distinct<I: Iterator>
where
    I::Item: Clone,
{
    iter: I,
    seen: HashSet<I::Item>,
}

impl<I> Iterator for Distinct<I>
where
    I: Iterator,
    I::Item: Eq + Hash + Clone,
{
    type Item = I::Item;

    fn next(&mut self) -> Option<I::Item> {
        loop {
            let item = self.iter.next()?;
            // `seen` must retain the value to compare future items, while
            // we hand this occurrence out — so the item clones itself into
            // the set (same contract as itertools' `unique`).
            if self.seen.insert(item.clone()) {
                return Some(item);
            }
        }
    }

    fn size_hint(&self) -> (usize, Option<usize>) {
        let (_, upper) = self.iter.size_hint();
        (0, upper)
    }
}

/// Fallback adapter behind [`FluentIter::when_empty`].
#[derive(Debug)]
pub struct WhenEmpty<I, F>
where
    I: Iterator,
    F: IntoIterator<Item = I::Item>,
{
    phase: WhenEmptyPhase<I, F::IntoIter>,
    fallback: Option<F>,
}

#[derive(Debug)]
enum WhenEmptyPhase<S, T> {
    /// Still pulling from the source; flag remembers whether it yielded yet.
    Source(S, bool),
    /// Source ran out without yielding: draining the fallback.
    Fallback(T),
    /// Done — `Iterator::next` must keep returning `None`.
    Done,
}

impl<I, F> Iterator for WhenEmpty<I, F>
where
    I: Iterator,
    F: IntoIterator<Item = I::Item>,
{
    type Item = I::Item;

    fn next(&mut self) -> Option<I::Item> {
        match &mut self.phase {
            WhenEmptyPhase::Source(source, yielded) => match source.next() {
                Some(item) => {
                    *yielded = true;
                    Some(item)
                }
                None => {
                    if *yielded {
                        self.phase = WhenEmptyPhase::Done;
                        return None;
                    }
                    match self.fallback.take() {
                        Some(fallback) => {
                            let mut iter = fallback.into_iter();
                            let item = iter.next();
                            self.phase = WhenEmptyPhase::Fallback(iter);
                            item
                        }
                        None => {
                            self.phase = WhenEmptyPhase::Done;
                            None
                        }
                    }
                }
            },
            WhenEmptyPhase::Fallback(iter) => iter.next(),
            WhenEmptyPhase::Done => None,
        }
    }
}

/// Finite repetition adapter behind [`FluentIter::repeat`].
///
/// The first pass streams the source while caching; passes 2..=n replay the
/// cache. With `times == 0` the source is never consumed at all.
#[derive(Debug)]
pub struct Repeat<I: Iterator>
where
    I::Item: Clone,
{
    source: I,
    cache: Vec<I::Item>,
    times: usize,
    /// 0 while streaming the first pass, then the replay round index.
    round: usize,
    pos: usize,
}

impl<I> Iterator for Repeat<I>
where
    I: Iterator,
    I::Item: Clone,
{
    type Item = I::Item;

    fn next(&mut self) -> Option<I::Item> {
        if self.times == 0 {
            return None;
        }
        loop {
            if self.round == 0 {
                if let Some(item) = self.source.next() {
                    self.cache.push(item.clone());
                    return Some(item);
                }
                self.round = 1;
                self.pos = 0;
            }
            if self.round >= self.times {
                return None;
            }
            if let Some(item) = self.cache.get(self.pos) {
                self.pos += 1;
                return Some(item.clone());
            }
            self.round += 1;
            self.pos = 0;
        }
    }
}

/// Internal phase of a buffered adapter: nothing consumed until the first
/// `next()` (⇔ the JS generators that run their full pass on first pull).
enum Phase<I: Iterator, O> {
    Source(I),
    Emitting(std::vec::IntoIter<O>),
    Done,
}

impl<I, O> Phase<I, O>
where
    I: Iterator,
{
    /// Drive one step: on the first call run `build` over the source (that
    /// is the only place the sequence is materialized), then drain.
    fn next_with(&mut self, mut build: impl FnMut(I) -> Vec<O>) -> Option<O> {
        if matches!(self, Phase::Source(_)) {
            // Only the Pending→Emitting transition consumes; later calls
            // must NOT replace (that would discard the buffered iterator).
            let src = match std::mem::replace(self, Phase::Done) {
                Phase::Source(i) => i,
                _ => unreachable!("guarded by matches! above"),
            };
            *self = Phase::Emitting(build(src).into_iter());
        }
        match self {
            Phase::Emitting(it) => it.next(),
            _ => None,
        }
    }

    fn size_hint(&self) -> (usize, Option<usize>) {
        match self {
            Phase::Emitting(it) => it.size_hint(),
            _ => (0, None),
        }
    }
}

/// Keyed streaming dedup produced by [`FluentIter::distinct_by`] — see there.
///
/// Purely lazy: buffers only the seen-key [`HashSet`], never the sequence.
/// `take(k)` stops pulling the source as soon as `k` distinct keys are out.
#[derive(Debug)]
pub struct DistinctBy<I, K, F>
where
    I: Iterator,
{
    iter: I,
    key: F,
    seen: HashSet<K>,
}

impl<I, K, F> Iterator for DistinctBy<I, K, F>
where
    I: Iterator,
    K: Eq + Hash,
    F: FnMut(&I::Item) -> K,
{
    type Item = I::Item;

    fn next(&mut self) -> Option<I::Item> {
        // Disjoint-field borrows (edition 2021 capture): iter is advanced
        // while the key/seen state is consulted.
        self.iter
            .by_ref()
            .find(|item| self.seen.insert((self.key)(item)))
    }

    fn size_hint(&self) -> (usize, Option<usize>) {
        (0, self.iter.size_hint().1)
    }
}

/// Stable grouping produced by [`FluentIter::group_by_stable`] — see there.
///
/// Lazy wrapper, buffering like npm's generator: the full pass runs on the
/// first `next()`, then groups are yielded one at a time.
pub struct GroupByStable<I, K, F>
where
    I: Iterator,
{
    phase: Phase<I, (K, Vec<I::Item>)>,
    key: F,
}

impl<I, K, F> Iterator for GroupByStable<I, K, F>
where
    I: Iterator,
    K: Eq + Hash + Clone,
    F: FnMut(&I::Item) -> K,
{
    type Item = (K, Vec<I::Item>);

    fn next(&mut self) -> Option<Self::Item> {
        self.phase.next_with(|src| {
            let mut index: HashMap<K, usize> = HashMap::new();
            let mut out: Vec<(K, Vec<I::Item>)> = Vec::new();
            for item in src {
                let k = (self.key)(&item);
                match index.get(&k) {
                    Some(&i) => out[i].1.push(item),
                    None => {
                        index.insert(k.clone(), out.len());
                        out.push((k, vec![item]));
                    }
                }
            }
            out
        })
    }

    fn size_hint(&self) -> (usize, Option<usize>) {
        self.phase.size_hint()
    }
}

/// Inner equi-join produced by [`FluentIter::combine`] — see there.
///
/// Lazy: the right side is indexed on the first `next()` (that side is read
/// in full, like the JS side indexes it too), then the left side streams —
/// `take(k)` stops the left walk once `k` pairs are out.
pub struct Combine<I, J, K, KL, KR>
where
    I: Iterator,
    J: Iterator,
{
    left: I,
    key_left: KL,
    right: J,
    key_right: KR,
    indexed: bool,
    idx: HashMap<K, Vec<J::Item>>,
    /// Left item currently yielding pairs, its key (cached: the closure is
    /// not re-invoked per pair), and the next bucket position.
    pending: Option<(I::Item, K, usize)>,
}

impl<I, J, K, KL, KR> Iterator for Combine<I, J, K, KL, KR>
where
    I: Iterator,
    J: Iterator,
    K: Eq + Hash + Clone,
    KL: FnMut(&I::Item) -> K,
    KR: FnMut(&J::Item) -> K,
    I::Item: Clone,
    J::Item: Clone,
{
    type Item = (I::Item, J::Item);

    fn next(&mut self) -> Option<Self::Item> {
        if !self.indexed {
            for r in self.right.by_ref() {
                self.idx.entry((self.key_right)(&r)).or_default().push(r);
            }
            self.indexed = true;
        }
        loop {
            if self.pending.is_none() {
                // Advance the left walk until an element finds a bucket.
                loop {
                    let l = self.left.next()?;
                    let k = (self.key_left)(&l);
                    if self.idx.get(&k).is_some_and(|b| !b.is_empty()) {
                        self.pending = Some((l, k, 0));
                        break;
                    }
                }
            }
            let (left, key, pos) = self.pending.take().expect("pending was just set");
            let bucket = &self.idx[&key];
            if pos < bucket.len() {
                let pair = (left.clone(), bucket[pos].clone());
                self.pending = Some((left, key, pos + 1));
                return Some(pair);
            }
            // bucket exhausted — the outer loop takes the next matching left
        }
    }
}

/// Folded join produced by [`FluentIter::combine_join`] — see there.
///
/// Lazy wrapper, buffering like npm's generator: every iterable is read and
/// folded on the first `next()`, then rows are yielded one at a time.
pub struct CombineJoin<I, T, K, F>
where
    I: Iterator,
{
    phase: Phase<I, Vec<T>>,
    key: F,
    _k: std::marker::PhantomData<fn(&T) -> K>,
}

impl<I, T, K, F> Iterator for CombineJoin<I, T, K, F>
where
    I: Iterator,
    I::Item: IntoIterator<Item = T>,
    K: Eq + Hash,
    T: Clone,
    F: FnMut(&T) -> K,
{
    type Item = Vec<T>;

    fn next(&mut self) -> Option<Vec<T>> {
        self.phase.next_with(|src| {
            let mut acc: Vec<Vec<T>> = Vec::new();
            let mut first = true;
            for iterable in src {
                let items: Vec<T> = iterable.into_iter().collect();
                if first {
                    first = false;
                    acc = items.into_iter().map(|item| vec![item]).collect();
                    continue;
                }
                if acc.is_empty() {
                    continue;
                }
                let mut idx: HashMap<K, Vec<T>> = HashMap::new();
                for item in items {
                    idx.entry((self.key)(&item)).or_default().push(item);
                }
                let mut next_acc = Vec::new();
                for row in acc {
                    // Rows are non-empty by construction; their key never
                    // changes across folds (inner-join invariant).
                    if let Some(bucket) = idx.get(&(self.key)(&row[0])) {
                        for item in bucket {
                            let mut grown = row.clone();
                            grown.push(item.clone());
                            next_acc.push(grown);
                        }
                    }
                }
                acc = next_acc;
            }
            acc
        })
    }

    fn size_hint(&self) -> (usize, Option<usize>) {
        self.phase.size_hint()
    }
}

/// Sorted sequence produced by [`FluentIter::sorted`] — see there.
pub struct Sorted<I: Iterator> {
    phase: Phase<I, I::Item>,
}

impl<I> Iterator for Sorted<I>
where
    I: Iterator,
    I::Item: Ord,
{
    type Item = I::Item;

    fn next(&mut self) -> Option<I::Item> {
        self.phase.next_with(|src| {
            let mut out: Vec<I::Item> = src.collect();
            out.sort();
            out
        })
    }

    fn size_hint(&self) -> (usize, Option<usize>) {
        self.phase.size_hint()
    }
}

/// Sorted sequence produced by [`FluentIter::sort_with`] — see there.
pub struct SortWith<I: Iterator, F> {
    phase: Phase<I, I::Item>,
    compare: F,
}

impl<I, F> Iterator for SortWith<I, F>
where
    I: Iterator,
    F: FnMut(&I::Item, &I::Item) -> Ordering,
{
    type Item = I::Item;

    fn next(&mut self) -> Option<I::Item> {
        self.phase.next_with(|src| {
            let mut out: Vec<I::Item> = src.collect();
            out.sort_by(&mut self.compare);
            out
        })
    }

    fn size_hint(&self) -> (usize, Option<usize>) {
        self.phase.size_hint()
    }
}

/// Sorted sequence produced by [`FluentIter::sort_by`] / [`FluentIter::sort_by_desc`].
pub struct SortBy<I: Iterator, K, F> {
    phase: Phase<I, I::Item>,
    key: F,
    descending: bool,
    _k: std::marker::PhantomData<fn(&I::Item) -> K>,
}

impl<I, K, F> Iterator for SortBy<I, K, F>
where
    I: Iterator,
    K: Ord,
    F: FnMut(&I::Item) -> K,
{
    type Item = I::Item;

    fn next(&mut self) -> Option<I::Item> {
        self.phase.next_with(|src| {
            let mut out: Vec<I::Item> = src.collect();
            if self.descending {
                out.sort_by_key(|item| std::cmp::Reverse((self.key)(item)));
            } else {
                out.sort_by_key(&mut self.key);
            }
            out
        })
    }

    fn size_hint(&self) -> (usize, Option<usize>) {
        self.phase.size_hint()
    }
}

/// The missing combinators of [`std::iter::Iterator`], in the
/// [`@codibre/fluent-iterable`] vocabulary (see the [crate docs](crate) for
/// the full npm ⇄ Rust map).
///
/// Blanket-implemented for every iterator — just `use fluent_iterable::FluentIter;`.
///
/// Every operator that npm returns as an iterable returns an [`Iterator`]
/// here too — chain freely and resolve with [`collect`][Iterator::collect]
/// when you want a collection. Operators that npm resolves (`avg`, `join`,
/// `toMap`, `hasX`, `contains`, …) return the plain value here.
pub trait FluentIter: Iterator + Sized {
    /// ⇔ `.group(keyFn)`: **stable** grouping — first-seen key order is
    /// preserved and each group keeps encounter order.
    ///
    /// Note [`Iterator::group_by`] only groups *consecutive* elements,
    /// which is a different operation (that one is `slice::group_by`
    /// territory); this is the npm `group`, which is a full pass.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let grouped: Vec<_> = ["b", "a", "b", "c", "a"]
    ///     .into_iter()
    ///     .group_by_stable(|x| *x)
    ///     .collect();
    /// let keys: Vec<_> = grouped.iter().map(|(k, _)| *k).collect();
    /// assert_eq!(keys, vec!["b", "a", "c"]);
    /// assert_eq!(grouped[1].1, vec!["a", "a"]);
    /// ```
    ///
    /// Lazy: the full grouping pass runs on the first pull, then groups are
    /// yielded one at a time — chain on without materializing the pair vec.
    fn group_by_stable<K, F>(self, key: F) -> GroupByStable<Self, K, F>
    where
        K: Eq + Hash + Clone,
        F: FnMut(&Self::Item) -> K,
    {
        GroupByStable {
            phase: Phase::Source(self),
            key,
        }
    }

    /// ⇔ `.combine(other, keySelf, keyOther)`: inner equi-join yielding
    /// **all** matching `(left, right)` pairs in left order (right side is
    /// indexed for `O(n + m)`; duplicate keys explode into pairs exactly
    /// like the JS side).
    ///
    /// JS shares object references between pairs; Rust must clone to hand
    /// owned pairs out. Joining iterators *of references*
    /// (`a.iter().combine(b.iter(), …)`) keeps the clone pointer-cheap.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let left = [1, 2, 1];
    /// let right = [(1, "x"), (1, "y"), (3, "z")];
    /// let joined: Vec<(&i32, &(i32, &str))> =
    ///     left.iter().combine(right.iter(), |l| **l, |(k, _)| *k).collect();
    /// let shape: Vec<(i32, &str)> =
    ///     joined.into_iter().map(|(l, (_, n))| (*l, *n)).collect();
    /// assert_eq!(shape, vec![(1, "x"), (1, "y"), (1, "x"), (1, "y")]);
    /// ```
    ///
    /// Lazy: the right side is indexed on the first pull, the left side
    /// streams — `take(k)` stops the left walk at `k` pairs.
    fn combine<J, K, KL, KR>(
        self,
        other: J,
        key_left: KL,
        key_right: KR,
    ) -> Combine<Self, J::IntoIter, K, KL, KR>
    where
        J: IntoIterator,
        K: Eq + Hash + Clone,
        KL: FnMut(&Self::Item) -> K,
        KR: FnMut(&J::Item) -> K,
        Self::Item: Clone,
        J::Item: Clone,
    {
        Combine {
            left: self,
            key_left,
            right: other.into_iter(),
            key_right,
            indexed: false,
            idx: HashMap::new(),
            pending: None,
        }
    }

    /// ⇔ `.combineJoin(baseKey)` on an iterator **of iterables**: reduces
    /// the whole family into one table of rows by a shared key — inner
    /// join, pairwise folded (`n` iterables produce rows of length `n`).
    /// The key is taken from the row's first element, exactly like the JS
    /// `([a]) => key(a)`. Once a fold step matches nothing the result is
    /// empty and stays empty.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let a = [(1, "a1"), (2, "a2")];
    /// let b = [(1, "b1"), (2, "b2")];
    /// let c = [(1, "c1")];
    /// let rows: Vec<Vec<_>> = [a.as_slice(), b.as_slice(), c.as_slice()]
    ///     .into_iter()
    ///     .combine_join(|(k, _)| *k)
    ///     .collect();
    /// assert_eq!(rows.len(), 1);
    /// assert_eq!(
    ///     rows[0].iter().map(|(_, v)| *v).collect::<Vec<_>>(),
    ///     vec!["a1", "b1", "c1"]
    /// );
    /// ```
    ///
    /// Lazy: the whole family is folded on the first pull, rows are yielded
    /// one at a time.
    fn combine_join<T, K, F>(self, key: F) -> CombineJoin<Self, T, K, F>
    where
        Self::Item: IntoIterator<Item = T>,
        K: Eq + Hash,
        T: Clone,
        F: FnMut(&T) -> K,
    {
        CombineJoin {
            phase: Phase::Source(self),
            key,
            _k: std::marker::PhantomData,
        }
    }

    /// ⇔ `.distinct()` on hashable items: keeps the **first** occurrence of
    /// every item. Lazy — buffers only the seen-set, and short-circuits
    /// downstream (`take(k)` stops pulling once `k` uniques are out).
    ///
    /// `Item` must be `Clone` (like `itertools::unique`): the set retains a
    /// copy of each value to compare against while the occurrence itself is
    /// yielded. Use [`FluentIter::distinct_by`] when cloning is not
    /// available — it tracks borrowed keys instead.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let out: Vec<i32> = [1, 2, 1, 3, 2].into_iter().distinct().collect();
    /// assert_eq!(out, vec![1, 2, 3]);
    /// ```
    fn distinct(self) -> Distinct<Self>
    where
        Self::Item: Eq + Hash + Clone,
    {
        Distinct {
            iter: self,
            seen: HashSet::new(),
        }
    }

    /// ⇔ `.distinct(keyFn)`: keep the **first** item seen for each key.
    ///
    /// Purely lazy — buffers only the seen-key set, never the sequence, so
    /// `take(k)` stops pulling the source once `k` distinct keys are out.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let out: Vec<&str> = ["bb", "a1", "b1", "a2", "c"]
    ///     .into_iter()
    ///     .distinct_by(|s| s.chars().next().unwrap())
    ///     .collect();
    /// assert_eq!(out, vec!["bb", "a1", "c"]);
    /// ```
    fn distinct_by<K, F>(self, key: F) -> DistinctBy<Self, K, F>
    where
        K: Eq + Hash,
        F: FnMut(&Self::Item) -> K,
    {
        DistinctBy {
            iter: self,
            key,
            seen: HashSet::new(),
        }
    }

    /// ⇔ `.isDistinct()`: are all items unique? Short-circuits on the first
    /// duplicate (the source is not drained).
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// assert!([1, 2, 3].into_iter().is_distinct());
    /// assert!(![1, 2, 1].into_iter().is_distinct());
    /// ```
    // npm parity names (`isDistinct`/`isDistinctBy`): these consume the
    // iterator instead of taking &mut self, because Iterator::all needs an
    // owned chain through the extension trait.
    #[allow(clippy::wrong_self_convention)]
    fn is_distinct(mut self) -> bool
    where
        Self::Item: Eq + Hash,
    {
        let mut seen = HashSet::new();
        self.all(|item| seen.insert(item))
    }

    /// ⇔ `.isDistinct(keyFn)`: is every key unique? Short-circuits on the
    /// first repetition.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// assert!([("a", 1), ("b", 2)].into_iter().is_distinct_by(|(k, _)| *k));
    /// assert!(![("a", 1), ("b", 2), ("a", 3)].into_iter().is_distinct_by(|(k, _)| *k));
    /// ```
    #[allow(clippy::wrong_self_convention)]
    fn is_distinct_by<K>(mut self, mut key: impl FnMut(&Self::Item) -> K) -> bool
    where
        K: Eq + Hash,
    {
        let mut seen = HashSet::new();
        self.all(|item| seen.insert(key(&item)))
    }

    /// ⇔ `.whenEmpty(fallback)`: yield from the source; if it produces
    /// **nothing**, yield the fallback instead. A non-empty source never
    /// touches the fallback iterable.
    ///
    /// Unlike JS the fallback must yield the same `Item` type — map it
    /// first if it doesn't.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let empty: [i32; 0] = [];
    /// let out: Vec<i32> = empty.into_iter().when_empty([7, 8]).collect();
    /// assert_eq!(out, vec![7, 8]);
    ///
    /// let out: Vec<i32> = [1].into_iter().when_empty([7, 8]).collect();
    /// assert_eq!(out, vec![1]);
    /// ```
    fn when_empty<F>(self, fallback: F) -> WhenEmpty<Self, F>
    where
        F: IntoIterator<Item = Self::Item>,
    {
        WhenEmpty {
            phase: WhenEmptyPhase::Source(self, false),
            fallback: Some(fallback),
        }
    }

    /// ⇔ `.repeat(n)`: yield the whole sequence `n` times (first pass
    /// streams and caches, later passes replay). `n == 0` yields nothing
    /// and never consumes the source. Unlike `std`'s nightly-only `cycle`,
    /// this is finite.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let out: Vec<i32> = [1, 2].into_iter().repeat(3).collect();
    /// assert_eq!(out, vec![1, 2, 1, 2, 1, 2]);
    ///
    /// let out: Vec<i32> = [1, 2].into_iter().repeat(0).collect();
    /// assert!(out.is_empty());
    /// ```
    fn repeat(self, times: usize) -> Repeat<Self>
    where
        Self::Item: Clone,
    {
        Repeat {
            source: self,
            cache: Vec::new(),
            times,
            round: 0,
            pos: 0,
        }
    }

    /// ⇔ `.toMap(keyFn, valueFn)`: later entries overwrite earlier ones for
    /// the same key (JS `Map.set` semantics; `HashMap` iteration order is
    /// unspecified, like the JS engine's).
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let items = vec![("k", 1), ("j", 2), ("k", 3)];
    /// let map = items.into_iter().to_map_by(|(k, _)| *k, |(_, v)| *v);
    /// assert_eq!(map.get("k"), Some(&3));
    /// ```
    fn to_map_by<K, V>(
        self,
        mut key: impl FnMut(&Self::Item) -> K,
        mut value: impl FnMut(&Self::Item) -> V,
    ) -> HashMap<K, V>
    where
        K: Eq + Hash,
    {
        self.map(|item| (key(&item), value(&item))).collect()
    }

    /// ⇔ `.toMapChain(k1, k2)`: two-level index — `key1` outer, `key2`
    /// inner, leaves keep encounter order.
    ///
    /// JS chains to an arbitrary number of key functions; Rust fixes the
    /// nested type at depth 2 — deeper nesting is a fold of these layers.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let rows = [("sp", "sa", 1), ("sp", "rj", 2), ("mg", "sa", 3)];
    /// let index = rows
    ///     .into_iter()
    ///     .to_map_chain(|(a, _, _)| *a, |(_, b, _)| *b);
    /// assert_eq!(index["sp"]["sa"], vec![("sp", "sa", 1)]);
    /// assert_eq!(index["sp"]["rj"], vec![("sp", "rj", 2)]);
    /// ```
    fn to_map_chain<K1, K2>(
        self,
        mut key1: impl FnMut(&Self::Item) -> K1,
        mut key2: impl FnMut(&Self::Item) -> K2,
    ) -> HashMap<K1, HashMap<K2, Vec<Self::Item>>>
    where
        K1: Eq + Hash,
        K2: Eq + Hash,
    {
        let mut out: HashMap<K1, HashMap<K2, Vec<Self::Item>>> = HashMap::new();
        for item in self {
            out.entry(key1(&item))
                .or_default()
                .entry(key2(&item))
                .or_default()
                .push(item);
        }
        out
    }

    /// ⇔ `.toMapChainReduce(k1, k2, reducer)`: two-level index whose leaves
    /// are folded instead of collected. JS folds without an explicit
    /// initial value; Rust demands one (there is no `undefined`).
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let rows = [("sp", "sa", 1), ("sp", "sa", 2), ("sp", "rj", 5)];
    /// let totals = rows.into_iter().to_map_chain_reduce(
    ///     |(a, _, _)| *a,
    ///     |(_, b, _)| *b,
    ///     0,
    ///     |acc, (_, _, v)| acc + v,
    /// );
    /// assert_eq!(totals["sp"]["sa"], 3);
    /// assert_eq!(totals["sp"]["rj"], 5);
    /// ```
    fn to_map_chain_reduce<K1, K2, A>(
        self,
        key1: impl FnMut(&Self::Item) -> K1,
        key2: impl FnMut(&Self::Item) -> K2,
        init: A,
        mut reduce: impl FnMut(A, Self::Item) -> A,
    ) -> HashMap<K1, HashMap<K2, A>>
    where
        K1: Eq + Hash,
        K2: Eq + Hash,
        A: Clone,
    {
        self.to_map_chain(key1, key2)
            .into_iter()
            .map(|(k1, inner)| {
                (
                    k1,
                    inner
                        .into_iter()
                        .map(|(k2, items)| {
                            let acc = items.into_iter().fold(init.clone(), &mut reduce);
                            (k2, acc)
                        })
                        .collect(),
                )
            })
            .collect()
    }

    /// ⇔ `.sort()` with the type's own ordering: collect and **stable**
    /// sort. (JS would stringify non-comparable items; Rust uses `Ord`.)
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let out: Vec<i32> = [3, 1, 2].into_iter().sorted().collect();
    /// assert_eq!(out, vec![1, 2, 3]);
    /// ```
    ///
    /// Lazy wrapper over the sort, ⇔ npm's `IterableSorted`: the collect +
    /// sort runs on the first pull, then items are yielded in order.
    fn sorted(self) -> Sorted<Self>
    where
        Self::Item: Ord,
    {
        Sorted {
            phase: Phase::Source(self),
        }
    }

    /// ⇔ `.sort(compareFn)`: stable sort with a custom comparator.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let out: Vec<i32> = [1, 2, 3].into_iter().sort_with(|a, b| b.cmp(a)).collect();
    /// assert_eq!(out, vec![3, 2, 1]);
    /// ```
    ///
    /// Lazy wrapper over the sort (buffered on first pull).
    fn sort_with<F>(self, compare: F) -> SortWith<Self, F>
    where
        F: FnMut(&Self::Item, &Self::Item) -> Ordering,
    {
        SortWith {
            phase: Phase::Source(self),
            compare,
        }
    }

    /// ⇔ `.sortBy(keyFn)`: stable sort ascending by key. Ties keep encounter
    /// order. As with `slice::sort_by_key` the key function may be called
    /// more than once per element — keep it cheap, or sort decorated values.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let rows = [("b", 1), ("a", 2), ("b", 3)];
    /// let out: Vec<_> = rows.into_iter().sort_by(|(_, v)| *v).collect();
    /// assert_eq!(out, vec![("b", 1), ("a", 2), ("b", 3)]);
    /// ```
    ///
    /// Lazy wrapper over the sort (buffered on first pull).
    fn sort_by<K, F>(self, key: F) -> SortBy<Self, K, F>
    where
        K: Ord,
        F: FnMut(&Self::Item) -> K,
    {
        SortBy {
            phase: Phase::Source(self),
            key,
            descending: false,
            _k: std::marker::PhantomData,
        }
    }

    /// ⇔ `.sortBy('-keyFn')` (the descending order descriptor): stable sort
    /// descending by key; ties keep encounter order.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let rows = [("b", 1), ("a", 2), ("b", 3)];
    /// let out: Vec<_> = rows.into_iter().sort_by_desc(|(_, v)| *v).collect();
    /// assert_eq!(out, vec![("b", 3), ("a", 2), ("b", 1)]);
    /// ```
    ///
    /// Lazy wrapper over the sort (buffered on first pull).
    fn sort_by_desc<K, F>(self, key: F) -> SortBy<Self, K, F>
    where
        K: Ord,
        F: FnMut(&Self::Item) -> K,
    {
        SortBy {
            phase: Phase::Source(self),
            key,
            descending: true,
            _k: std::marker::PhantomData,
        }
    }

    /// ⇔ `.avg()`: arithmetic mean as `Option<f64>` — `None` on empty
    /// (JS returns `NaN`; Rust says it in the type).
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// assert_eq!([2, 4, 6].into_iter().avg(), Some(4.0));
    /// assert_eq!(std::iter::empty::<i32>().avg(), None);
    /// ```
    fn avg(self) -> Option<f64>
    where
        Self::Item: Into<f64>,
    {
        let (mut sum, mut count) = (0f64, 0usize);
        for item in self {
            sum += item.into();
            count += 1;
        }
        if count == 0 {
            None
        } else {
            Some(sum / count as f64)
        }
    }

    /// ⇔ `.avg(mapFn)`: mean of a projection.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let rows = [("x", 10.0), ("y", 20.0)];
    /// assert_eq!(rows.into_iter().avg_by(|(_, v)| *v), Some(15.0));
    /// ```
    fn avg_by(self, mut value: impl FnMut(&Self::Item) -> f64) -> Option<f64> {
        let (mut sum, mut count) = (0f64, 0usize);
        for item in self {
            sum += value(&item);
            count += 1;
        }
        if count == 0 {
            None
        } else {
            Some(sum / count as f64)
        }
    }

    /// ⇔ `.join(sep)`: display every item with the separator between.
    /// (JS skips nullish items; Rust has neither, every item is shown.)
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// assert_eq!([1, 2, 3].into_iter().join(", "), "1, 2, 3");
    /// ```
    fn join(self, separator: &str) -> String
    where
        Self::Item: Display,
    {
        self.map(|item| item.to_string())
            .collect::<Vec<String>>()
            .join(separator)
    }

    /// ⇔ `.join(sep, mapFn)`: project each item before joining.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let out = [1, 2].into_iter().join_by(|v| format!("{v:>3}"), "-");
    /// assert_eq!(out, "  1-  2");
    /// ```
    fn join_by<S: Display>(
        self,
        mut value: impl FnMut(&Self::Item) -> S,
        separator: &str,
    ) -> String {
        self.map(|item| value(&item).to_string())
            .collect::<Vec<String>>()
            .join(separator)
    }

    /// ⇔ `.hasExactly(n)`: exactly `n` items — and no more. Short-circuits
    /// after `n + 1` items.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// assert!([1, 2].into_iter().has_exactly(2));
    /// assert!(![1, 2, 3].into_iter().has_exactly(2));
    /// ```
    fn has_exactly(self, n: usize) -> bool {
        self.take(n.saturating_add(1)).count() == n
    }

    /// ⇔ `.hasLessThan(n)`: strictly fewer than `n` items. Short-circuits
    /// after `n + 1`.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// assert!([1].into_iter().has_less_than(2));
    /// assert!(![1, 2].into_iter().has_less_than(2));
    /// ```
    fn has_less_than(self, n: usize) -> bool {
        self.take(n.saturating_add(1)).count() < n
    }

    /// ⇔ `.hasLessOrExactly(n)`: at most `n` items. Short-circuits after
    /// `n + 1`.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// assert!([1, 2].into_iter().has_less_or_exactly(2));
    /// assert!(![1, 2, 3].into_iter().has_less_or_exactly(2));
    /// ```
    fn has_less_or_exactly(self, n: usize) -> bool {
        self.take(n.saturating_add(1)).count() <= n
    }

    /// ⇔ `.hasMoreThan(n)`: strictly more than `n` items. Short-circuits
    /// after `n + 1`.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// assert!([1, 2, 3].into_iter().has_more_than(2));
    /// assert!(![1, 2].into_iter().has_more_than(2));
    /// ```
    fn has_more_than(self, n: usize) -> bool {
        self.take(n.saturating_add(1)).count() > n
    }

    /// ⇔ `.hasMoreOrExactly(n)`: at least `n` items. Short-circuits after
    /// `n` — it cannot tell you *how many* more.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// assert!([1, 2].into_iter().has_more_or_exactly(2));
    /// assert!(![1].into_iter().has_more_or_exactly(2));
    /// ```
    fn has_more_or_exactly(self, n: usize) -> bool {
        self.take(n).count() >= n
    }

    /// ⇔ `.reduceAndMap(reducer, initial, resultFn)`: fold, then project the
    /// accumulator. Argument order follows [`Iterator::fold`] (initial
    /// first), not the JS signature.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let report = [1, 2, 3]
    ///     .into_iter()
    ///     .reduce_and_map(0, |acc, x| acc + x, |sum| format!("total {sum}"));
    /// assert_eq!(report, "total 6");
    /// ```
    fn reduce_and_map<A, R>(
        self,
        init: A,
        mut fold: impl FnMut(A, Self::Item) -> A,
        mut map: impl FnMut(A) -> R,
    ) -> R {
        map(self.fold(init, &mut fold))
    }

    /// ⇔ `.contains(item)`: any item equal to `item` (JS compares with
    /// `===`; Rust uses [`PartialEq`]). Short-circuits on the first hit.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// assert!(["a", "b"].into_iter().contains(&"b"));
    /// assert!(!["a", "b"].into_iter().contains(&"c"));
    /// ```
    fn contains(mut self, item: &Self::Item) -> bool
    where
        Self::Item: PartialEq,
    {
        self.any(|x| &x == item)
    }
}

impl<I: Iterator> FluentIter for I {}

#[cfg(test)]
mod tests {
    use super::*;
    use std::cell::Cell;
    use std::iter::FromIterator;
    use std::rc::Rc;

    /// Counts how many items the wrapped iterator ever yielded — proof of
    /// short-circuiting for the lazy/terminal checks.
    struct Counting<I: Iterator> {
        inner: I,
        yielded: Rc<Cell<usize>>,
    }

    impl<I: Iterator> Iterator for Counting<I> {
        type Item = I::Item;
        fn next(&mut self) -> Option<I::Item> {
            let item = self.inner.next();
            if item.is_some() {
                self.yielded.set(self.yielded.get() + 1);
            }
            item
        }
    }

    fn counting<I: Iterator>(inner: I) -> (Counting<I>, Rc<Cell<usize>>) {
        let counter = Rc::new(Cell::new(0));
        (
            Counting {
                inner,
                yielded: Rc::clone(&counter),
            },
            counter,
        )
    }

    // ---- ported from the proven mq crate ----

    #[test]
    fn stable_group_order() {
        let items = ["b", "a", "b", "c", "a"];
        let grouped: Vec<_> = items.into_iter().group_by_stable(|x| *x).collect();
        let keys: Vec<_> = grouped.iter().map(|(k, _)| *k).collect();
        assert_eq!(keys, vec!["b", "a", "c"]);
        assert_eq!(grouped[1].1, vec!["a", "a"]);
    }

    #[test]
    fn combine_all_pairs_left_order() {
        let left = [1, 2, 1];
        let right = [(1, "x"), (1, "y"), (3, "z")];
        let joined: Vec<_> = left
            .iter()
            .combine(right.iter(), |l| **l, |(k, _)| *k)
            .collect();
        assert_eq!(joined.len(), 4);
        let shapes: Vec<(i32, &str)> = joined
            .into_iter()
            .map(|(l, (_, name))| (*l, *name))
            .collect();
        assert_eq!(shapes, vec![(1, "x"), (1, "y"), (1, "x"), (1, "y")]);
    }

    #[test]
    fn combine_owned_items_fan_out_clones() {
        let left = vec![String::from("a"), String::from("a")];
        let right = vec![String::from("a1"), String::from("a2")];
        let joined = left
            .into_iter()
            .combine(right, |l| l.clone(), |r| r[..1].to_owned());
        let shapes: Vec<(String, String)> = joined.into_iter().collect();
        assert_eq!(
            shapes,
            vec![
                ("a".to_owned(), "a1".to_owned()),
                ("a".to_owned(), "a2".to_owned()),
                ("a".to_owned(), "a1".to_owned()),
                ("a".to_owned(), "a2".to_owned()),
            ]
        );
    }

    #[test]
    fn distinct_keeps_first_per_key() {
        let items = ["bb", "a1", "b1", "a2", "c"];
        let out: Vec<_> = items
            .into_iter()
            .distinct_by(|s| s.chars().next().unwrap())
            .collect();
        assert_eq!(out, vec!["bb", "a1", "c"]);
    }

    #[test]
    fn to_map_last_write_wins() {
        let items = vec![("k", 1), ("j", 2), ("k", 3)];
        let map = items.into_iter().to_map_by(|(k, _)| *k, |(_, v)| *v);
        assert_eq!(map.get("k"), Some(&3));
        assert_eq!(map.get("j"), Some(&2));
        assert_eq!(map.len(), 2);
    }

    // ---- lazy adapters ----

    #[test]
    fn distinct_is_lazy_and_short_circuits() {
        let (source, counter) = counting([1, 1, 2, 3, 3, 3, 4].into_iter());
        let out: Vec<i32> = source.distinct().take(2).collect();
        assert_eq!(out, vec![1, 2]);
        // stopped right after discovering 2 (never walked the tail)
        assert!(counter.get() <= 4, "consumed {}", counter.get());
    }

    #[test]
    fn is_distinct_checks_and_short_circuits() {
        assert!([1, 2, 3].into_iter().is_distinct());
        assert!(std::iter::empty::<i32>().is_distinct());
        let (source, counter) = counting([1, 2, 1, 2, 1].into_iter());
        assert!(!source.is_distinct());
        assert_eq!(counter.get(), 3);
    }

    #[test]
    fn is_distinct_by_short_circuits() {
        assert!([("a", 1), ("b", 2)].into_iter().is_distinct_by(|(k, _)| *k));
        let (source, counter) = counting([("a", 1), ("b", 2), ("a", 3), ("b", 4)].into_iter());
        assert!(!source.is_distinct_by(|(k, _)| *k));
        assert_eq!(counter.get(), 3);
    }

    #[test]
    fn when_empty_uses_fallback_only_for_empty_source() {
        let empty: [i32; 0] = [];
        let out: Vec<i32> = empty.into_iter().when_empty([7, 8]).collect();
        assert_eq!(out, vec![7, 8]);

        let (fallback_source, fallback_counter) = counting([7, 8].into_iter());
        let out: Vec<i32> = [1, 2].into_iter().when_empty(fallback_source).collect();
        assert_eq!(out, vec![1, 2]);
        assert_eq!(fallback_counter.get(), 0, "fallback must stay untouched");
    }

    #[test]
    fn when_empty_with_empty_fallback_is_empty() {
        let empty: [i32; 0] = [];
        let out: Vec<i32> = empty.into_iter().when_empty(empty).collect();
        assert!(out.is_empty());
    }

    #[test]
    fn when_empty_falls_back_after_late_first_value_absent() {
        // source yields nothing but is polled several times before giving up
        let (source, counter) = counting(std::iter::empty::<i32>());
        let out: Vec<i32> = source.when_empty([9]).collect();
        assert_eq!(out, vec![9]);
        assert_eq!(counter.get(), 0);
    }

    #[test]
    fn repeat_replays_whole_sequence() {
        let out: Vec<i32> = [1, 2].into_iter().repeat(3).collect();
        assert_eq!(out, vec![1, 2, 1, 2, 1, 2]);
        let out: Vec<i32> = [1, 2].into_iter().repeat(1).collect();
        assert_eq!(out, vec![1, 2]);
    }

    #[test]
    fn repeat_zero_never_consumes_source() {
        let (source, counter) = counting([1, 2, 3].into_iter());
        let out: Vec<i32> = source.repeat(0).collect();
        assert!(out.is_empty());
        assert_eq!(counter.get(), 0);
    }

    #[test]
    fn repeat_streams_first_pass_before_replaying() {
        let (source, counter) = counting([1, 2, 3].into_iter());
        let mut rep = source.repeat(2);
        assert_eq!(rep.next(), Some(1));
        // only one item pulled so far: the first pass is streaming
        assert_eq!(counter.get(), 1);
        assert_eq!(rep.next(), Some(2));
        assert_eq!(rep.next(), Some(3));
        assert_eq!(rep.next(), Some(1)); // replay started
        assert_eq!(rep.count(), 2);
    }

    #[test]
    fn repeat_of_empty_source_is_empty() {
        let out: Vec<i32> = std::iter::empty::<i32>().repeat(4).collect();
        assert!(out.is_empty());
    }

    #[test]
    fn distinct_by_is_lazy_and_short_circuits() {
        // take(k) must stop pulling the source at the k-th distinct key —
        // impossible for an eager implementation (the design bug this
        // replaced).
        let (source, counter) = counting([1, 1, 2, 2, 3, 3, 4, 4].into_iter());
        let out: Vec<i32> = source.distinct_by(|x| *x).take(2).collect();
        assert_eq!(out, vec![1, 2]);
        assert_eq!(counter.get(), 3); // pulled up to the second `2`, no further
    }

    #[test]
    fn buffered_adapters_consume_nothing_until_polled() {
        // ⇔ JS generators: building the chain runs no code; the internal
        // full pass happens on the first next().
        let (source, counter) = counting([3, 1, 2].into_iter());
        let _grouped = source.group_by_stable(|x| *x);
        assert_eq!(counter.get(), 0);

        let (source, counter) = counting([3, 1, 2].into_iter());
        let mut sorted = source.sorted();
        assert_eq!(counter.get(), 0);
        assert_eq!(sorted.next(), Some(1)); // first pull buffers + sorts all
        assert_eq!(counter.get(), 3);

        let (source, counter) = counting([vec![1], vec![2]].into_iter());
        let _joined = source.combine_join(|x| *x);
        assert_eq!(counter.get(), 0);
    }

    #[test]
    fn combine_indexes_right_on_first_pull_and_streams_left() {
        let (left, left_pulls) = counting([1, 2, 3, 1, 2, 3].into_iter());
        let right = [(1, "x")];
        let mut joined = left.combine(right, |l| *l, |(k, _)| *k);
        assert_eq!(left_pulls.get(), 0);
        assert_eq!(joined.next(), Some((1, (1, "x"))));
        // left stopped at the first matching element: no full left scan
        assert_eq!(left_pulls.get(), 1);
        assert_eq!(joined.next(), Some((1, (1, "x"))));
        assert_eq!(joined.next(), None);
    }

    // ---- resolving terminals ----

    #[test]
    fn sort_family_is_stable() {
        let rows = [("b", 1), ("a", 2), ("b", 3), ("a", 1)];
        let by_value: Vec<_> = rows.into_iter().sort_by(|(_, v)| *v).collect();
        // ties (value 1 then 2..): encounter order preserved
        assert_eq!(by_value, vec![("b", 1), ("a", 1), ("a", 2), ("b", 3)]);
        let desc: Vec<_> = rows.into_iter().sort_by_desc(|(_, v)| *v).collect();
        assert_eq!(desc, vec![("b", 3), ("a", 2), ("b", 1), ("a", 1)]);
        let asc: Vec<u8> = [3u8, 1, 2].into_iter().sorted().collect();
        assert_eq!(asc, vec![1, 2, 3]);
        let custom: Vec<i32> = [1, 2, 3].into_iter().sort_with(|a, b| b.cmp(a)).collect();
        assert_eq!(custom, vec![3, 2, 1]);
    }

    #[test]
    fn avg_handles_ints_floats_and_empty() {
        assert_eq!([2, 4, 6].into_iter().avg(), Some(4.0));
        assert_eq!(std::iter::empty::<i32>().avg(), None);
        let rows = [("x", 10.0), ("y", 20.0)];
        assert_eq!(rows.into_iter().avg_by(|(_, v)| *v), Some(15.0));
        assert_eq!(std::iter::empty::<&str>().avg_by(|_| 1.0), None);
    }

    #[test]
    fn join_displays_and_projects() {
        assert_eq!([1, 2, 3].into_iter().join(", "), "1, 2, 3");
        assert_eq!(std::iter::empty::<i32>().join(","), "");
        let out = [1, 2].into_iter().join_by(|v| format!("{v:>3}"), "-");
        assert_eq!(out, "  1-  2");
    }

    #[test]
    fn has_cardinality_matrix() {
        // source length × n → each predicate, matching comparisonRecipe:
        // count(take(n+1)) `op` n
        let len = |n: usize| (0..n).collect::<Vec<_>>();
        assert!(len(2).into_iter().has_exactly(2));
        assert!(!len(3).into_iter().has_exactly(2));
        assert!(!len(1).into_iter().has_exactly(2));
        // count(take(1)) == 0 → empty sequence hasExactly(0), like the JS
        // comparisonRecipe
        assert!(len(0).into_iter().has_exactly(0));
        assert!(len(1).into_iter().has_less_than(2));
        assert!(!len(2).into_iter().has_less_than(2));
        assert!(len(0).into_iter().has_less_than(1));
        assert!(!len(0).into_iter().has_less_than(0));
        assert!(len(2).into_iter().has_less_or_exactly(2));
        assert!(!len(3).into_iter().has_less_or_exactly(2));
        assert!(len(3).into_iter().has_more_than(2));
        assert!(!len(2).into_iter().has_more_than(2));
        assert!(len(2).into_iter().has_more_or_exactly(2));
        assert!(!len(1).into_iter().has_more_or_exactly(2));
        assert!(len(5).into_iter().has_more_or_exactly(2));
    }

    #[test]
    fn has_cardinality_short_circuits() {
        let (source, counter) = counting(0..1_000_000i64);
        assert!(source.has_more_than(2));
        assert_eq!(counter.get(), 3);

        let (source, counter) = counting(0..1_000_000i64);
        assert!(!source.has_less_than(2));
        assert_eq!(counter.get(), 3);

        let (source, counter) = counting(0..1_000_000i64);
        assert!(source.has_more_or_exactly(2));
        assert_eq!(counter.get(), 2);
    }

    #[test]
    fn reduce_and_map_folds_then_projects() {
        let report =
            [1, 2, 3]
                .into_iter()
                .reduce_and_map(0, |acc, x| acc + x, |sum| format!("total {sum}"));
        assert_eq!(report, "total 6");
        let count = std::iter::empty::<i32>().reduce_and_map(0, |a, _| a + 1, |c| c);
        assert_eq!(count, 0);
    }

    #[test]
    fn contains_compares_and_short_circuits() {
        assert!(["a", "b"].into_iter().contains(&"b"));
        assert!(!["a", "b"].into_iter().contains(&"c"));
        let (source, counter) =
            counting(vec![String::from("x"), String::from("hit"), String::from("y")].into_iter());
        assert!(source.contains(&String::from("hit")));
        assert_eq!(counter.get(), 2);
    }

    #[test]
    fn to_map_chain_builds_nested_leaves() {
        let rows = [
            ("sp", "sa", 1),
            ("sp", "rj", 2),
            ("sp", "sa", 3),
            ("mg", "sa", 4),
        ];
        let index = rows
            .into_iter()
            .to_map_chain(|(a, _, _)| *a, |(_, b, _)| *b);
        assert_eq!(index.len(), 2);
        assert_eq!(
            index["sp"]["sa"]
                .iter()
                .map(|(_, _, v)| *v)
                .collect::<Vec<_>>(),
            vec![1, 3]
        );
        assert_eq!(index["sp"]["rj"].len(), 1);
        assert_eq!(index["mg"]["sa"].len(), 1);
    }

    #[test]
    fn to_map_chain_reduce_folds_leaves() {
        let rows = [("sp", "sa", 1), ("sp", "sa", 2), ("sp", "rj", 5)];
        let totals = rows.into_iter().to_map_chain_reduce(
            |(a, _, _)| *a,
            |(_, b, _)| *b,
            0,
            |acc, (_, _, v)| acc + v,
        );
        assert_eq!(totals["sp"]["sa"], 3);
        assert_eq!(totals["sp"]["rj"], 5);
        assert!(!totals.contains_key("mg"));
    }

    #[test]
    fn combine_join_folds_iterables_by_key() {
        let a = [(1, "a1"), (2, "a2")];
        let b = [(1, "b1"), (2, "b2")];
        let c = [(1, "c1")];
        let rows: Vec<Vec<_>> = [a.as_slice(), b.as_slice(), c.as_slice()]
            .into_iter()
            .combine_join(|(k, _)| *k)
            .collect();
        assert_eq!(rows.len(), 1);
        assert_eq!(
            rows[0].iter().map(|(_, v)| *v).collect::<Vec<_>>(),
            vec!["a1", "b1", "c1"]
        );
    }

    #[test]
    fn combine_join_drops_keys_missing_from_any_iterable() {
        let a = [(1, "a1"), (2, "a2")];
        let b = [(1, "b1")];
        let c = [(2, "c2")];
        // key 1 dies at `c`, key 2 died at `b` → empty
        let rows: Vec<Vec<_>> = [a.as_slice(), b.as_slice(), c.as_slice()]
            .into_iter()
            .combine_join(|(k, _)| *k)
            .collect();
        assert!(rows.is_empty());
    }

    #[test]
    fn combine_join_multiplies_duplicate_keys() {
        let a = [(1, "a1"), (1, "a2")];
        let b = [(1, "b1")];
        let rows: Vec<Vec<_>> = [a.as_slice(), b.as_slice()]
            .into_iter()
            .combine_join(|(k, _)| *k)
            .collect();
        assert_eq!(rows.len(), 2);
        assert_eq!(
            HashSet::from_iter(rows.iter().map(|r| r[0].1)),
            HashSet::from(["a1", "a2"])
        );
    }

    #[test]
    fn adapters_resolve_std_iterator_methods() {
        // 0.0.3 regression: SortBy/CombineJoin carried K only in the impl
        // header, so std Iterator methods failed to resolve on them from a
        // bare call site. Keep K pinned in the struct type parameters.
        // (Note std `Iterator` has no `first` — that one is inherent to
        // slices — so the std spelling of "take the least" is `next()`.)
        let rows = [("b", 1), ("a", 2), ("b", 3)];
        assert_eq!(rows.iter().sort_by(|(_, v)| *v).count(), 3);
        assert_eq!(
            rows.iter().sort_by_desc(|(_, v)| *v).next().copied(),
            Some(("b", 3))
        );
        // ascending first == the minimum key (1, held by "b").
        assert_eq!(
            rows.iter().sort_by(|(_, v)| *v).next().copied(),
            Some(("b", 1))
        );
        let groups = vec![vec![("x", 1)], vec![("x", 2), ("y", 3)]];
        assert_eq!(groups.into_iter().combine_join(|(k, _)| *k).count(), 1);
    }

    #[test]
    fn combine_join_of_nothing_is_empty() {
        let rows: Vec<Vec<_>> = std::iter::empty::<&[(i32, &str)]>()
            .combine_join(|(k, _)| *k)
            .collect();
        assert!(rows.is_empty());
    }

    #[test]
    fn chaining_matches_readme_example() {
        let rows = [("sa", 10), ("sp", 30), ("sa", 25)];
        let by_state: Vec<_> = rows.into_iter().group_by_stable(|(s, _)| *s).collect();
        assert_eq!(by_state[0].1, vec![("sa", 10), ("sa", 25)]);
        let report = rows
            .into_iter()
            .map(|(_, v)| v)
            .join_by(|v| format!("{v:>4}"), " | ");
        assert_eq!(report, "  10 |   30 |   25");
    }
}
