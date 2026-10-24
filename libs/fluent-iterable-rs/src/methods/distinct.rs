// Distinctness: lazy dedup and short-circuiting checks.
//
// Spliced into the `FluentIter` trait by `build.rs`. Names resolve in
// the crate-root scope of `lib.rs`, exactly as before the split.

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
