//! Adapters for the combining operations.

use std::collections::HashMap;
use std::hash::Hash;

/// Inner equi-join produced by [`FluentIter::combine`] — see there.
///
/// Streams in both directions for as long as it can: the *first* left
/// item walks the raw right stream, indexing it on the fly and yielding
/// its own matches as they appear — `take(k)` can stop before the right
/// side is drained. From the second left item on, the index is complete
/// and only the left side streams. Adapter memory is O(right), never
/// O(left), and pairs never accumulate.
pub struct Combine<I, J, K, KL, KR>
where
    I: Iterator,
    J: Iterator,
{
    pub(crate) left: I,
    pub(crate) key_left: KL,
    pub(crate) right: J,
    pub(crate) key_right: KR,
    /// The right scan has run to completion (the index is whole).
    pub(crate) indexed: bool,
    /// Bootstrap pair: the *first* left item and its cached key, streamed
    /// against the still-unindexed right side until it is exhausted.
    pub(crate) boot: Option<(I::Item, K)>,
    pub(crate) idx: HashMap<K, Vec<J::Item>>,
    /// Left item currently yielding pairs, its key (cached: the closure is
    /// not re-invoked per pair), and the next bucket position.
    pub(crate) pending: Option<(I::Item, K, usize)>,
}

impl<I, J, K, KL, KR> Iterator for Combine<I, J, K, KL, KR>
where
    I: Iterator,
    J: Iterator,
    K: Eq + Hash,
    KL: FnMut(&I::Item) -> K,
    KR: FnMut(&J::Item) -> K,
    I::Item: Copy,
    J::Item: Copy,
{
    type Item = (I::Item, J::Item);

    #[inline]
    fn next(&mut self) -> Option<Self::Item> {
        loop {
            if let Some((l, kl)) = self.boot.take() {
                match self.right.next() {
                    Some(r) => {
                        let kr = (self.key_right)(&r);
                        let matched = kr == kl;
                        self.idx.entry(kr).or_default().push(r);
                        self.boot = Some((l, kl));
                        if matched {
                            // Yield while the right side is still being
                            // pulled — the bootstrap streams its matches.
                            return Some((l, r));
                        }
                    }
                    // The right side is now indexed in full; the boot item
                    // has produced every pair it ever will.
                    None => self.indexed = true,
                }
            } else if !self.indexed {
                let l = self.left.next()?;
                let kl = (self.key_left)(&l);
                self.boot = Some((l, kl));
            } else if let Some((left, key, pos)) = self.pending.take() {
                let bucket = &self.idx[&key];
                let pair = (left, bucket[pos]);
                if pos + 1 < bucket.len() {
                    self.pending = Some((left, key, pos + 1));
                }
                return Some(pair);
            } else {
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
        }
    }
}
