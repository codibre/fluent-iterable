// Stable sorting.
//
// Spliced into the `FluentIter` trait by `build.rs`. Names resolve in
// the crate-root scope of `lib.rs`, exactly as before the split.

    /// ⇔ `.sort()` with the type's own ordering: collect and **stable**
    /// sort. (JS would stringify non-comparable items; Rust uses `Ord`.)
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// assert_eq!([3, 1, 2].into_iter().sorted(), vec![1, 2, 3]);
    /// ```
    ///
    /// Resolving: nothing beats the minimum until the source is drained, so
    /// a lazy sort wrapper can never short-circuit — the sorted `Vec` does
    /// the same work once and adds re-iterability plus every `Vec` method
    /// (npm's `IterableSorted` buffering made sense in JS, not here).
    fn sorted(self) -> Vec<Self::Item>
    where
        Self::Item: Ord,
    {
        let mut out: Vec<Self::Item> = self.collect();
        out.sort();
        out
    }

    /// ⇔ `.sort(compareFn)`: stable sort with a custom comparator.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// assert_eq!([1, 2, 3].into_iter().sort_with(|a, b| b.cmp(a)), vec![3, 2, 1]);
    /// ```
    ///
    /// Resolving, like [`FluentIter::sorted`].
    fn sort_with<F>(self, mut compare: F) -> Vec<Self::Item>
    where
        F: FnMut(&Self::Item, &Self::Item) -> Ordering,
    {
        let mut out: Vec<Self::Item> = self.collect();
        out.sort_by(&mut compare);
        out
    }

    /// ⇔ `.sortBy(keyFn)`: stable sort ascending by key. Ties keep encounter
    /// order. As with `slice::sort_by_key` the key function may be called
    /// more than once per element — keep it cheap, or sort decorated values.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let rows = [("b", 1), ("a", 2), ("b", 3)];
    /// let sorted = rows.into_iter().sort_by(|(_, v)| *v);
    /// assert_eq!(sorted, vec![("b", 1), ("a", 2), ("b", 3)]);
    /// assert_eq!(sorted.first().copied(), Some(("b", 1)));
    /// ```
    ///
    /// Resolving, like [`FluentIter::sorted`] — but only pay for what you
    /// need: if the goal is *the least* rather than the whole order, use
    /// [`Iterator::min_by_key`] (or [`Iterator::max_by_key`]) directly.
    /// One pass, no allocation, and std documents first-wins on ties —
    /// the exact semantics of `sortBy(k).first()` over `.sort(k => k)` in
    /// JS, without the `O(n log n)` sort and the intermediate `Vec`.
    ///
    /// ```
    /// use fluent_iterable::FluentIter; // for the sibling vocabulary
    ///
    /// let rows = [("b", 1), ("a", 2), ("b", 3)];
    /// // sortBy(v => v).first() ⇔ min_by_key, in O(n):
    /// assert_eq!(rows.iter().min_by_key(|(_, v)| *v).copied(), Some(("b", 1)));
    /// ```
    fn sort_by<K, F>(self, mut key: F) -> Vec<Self::Item>
    where
        K: Ord,
        F: FnMut(&Self::Item) -> K,
    {
        let mut out: Vec<Self::Item> = self.collect();
        out.sort_by_key(&mut key);
        out
    }

    /// ⇔ `.sortBy('-keyFn')` (the descending order descriptor): stable sort
    /// descending by key; ties keep encounter order.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let rows = [("b", 1), ("a", 2), ("b", 3)];
    /// assert_eq!(
    ///     rows.into_iter().sort_by_desc(|(_, v)| *v),
    ///     vec![("b", 3), ("a", 2), ("b", 1)]
    /// );
    /// ```
    ///
    /// Resolving, like [`FluentIter::sorted`].
    fn sort_by_desc<K, F>(self, mut key: F) -> Vec<Self::Item>
    where
        K: Ord,
        F: FnMut(&Self::Item) -> K,
    {
        let mut out: Vec<Self::Item> = self.collect();
        out.sort_by_key(|item| std::cmp::Reverse(key(item)));
        out
    }
