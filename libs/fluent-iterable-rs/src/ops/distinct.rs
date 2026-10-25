//! Adapters for the distinct operations.

use std::collections::HashSet;
use std::hash::Hash;

/// Streaming deduplication adapter behind [`FluentIter::distinct`].
///
/// Keeps the first occurrence of every item and drops later ones, holding
/// one [`HashSet`] of what has been seen — it never buffers the sequence.
#[derive(Debug)]
pub struct Distinct<I: Iterator>
where
    I::Item: Copy,
{
    pub(crate) iter: I,
    pub(crate) seen: HashSet<I::Item>,
}

impl<I> Iterator for Distinct<I>
where
    I: Iterator,
    I::Item: Eq + Hash + Copy,
{
    type Item = I::Item;

    #[inline]
    fn next(&mut self) -> Option<I::Item> {
        loop {
            let item = self.iter.next()?;
            // Handles only: `seen` retains a bit-copy of the handle (a
            // pointer for reference streams), never the object behind it —
            // the payload lives exactly once, in the caller's container.
            if self.seen.insert(item) {
                return Some(item);
            }
        }
    }

    #[inline]
    fn size_hint(&self) -> (usize, Option<usize>) {
        let (_, upper) = self.iter.size_hint();
        (0, upper)
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
    pub(crate) iter: I,
    pub(crate) key: F,
    pub(crate) seen: HashSet<K>,
}

impl<I, K, F> Iterator for DistinctBy<I, K, F>
where
    I: Iterator,
    K: Eq + Hash,
    F: FnMut(&I::Item) -> K,
{
    type Item = I::Item;

    #[inline]
    fn next(&mut self) -> Option<I::Item> {
        // Disjoint-field borrows (edition 2021 capture): iter is advanced
        // while the key/seen state is consulted.
        self.iter
            .by_ref()
            .find(|item| self.seen.insert((self.key)(item)))
    }

    #[inline]
    fn size_hint(&self) -> (usize, Option<usize>) {
        (0, self.iter.size_hint().1)
    }
}
