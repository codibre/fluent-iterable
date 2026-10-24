//! Adapters for the combining operations.

use std::collections::HashMap;
use std::hash::Hash;

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
    pub(crate) left: I,
    pub(crate) key_left: KL,
    pub(crate) right: J,
    pub(crate) key_right: KR,
    pub(crate) indexed: bool,
    pub(crate) idx: HashMap<K, Vec<J::Item>>,
    /// Left item currently yielding pairs, its key (cached: the closure is
    /// not re-invoked per pair), and the next bucket position.
    pub(crate) pending: Option<(I::Item, K, usize)>,
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
