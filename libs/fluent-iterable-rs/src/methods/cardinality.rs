// Cardinality predicates.
//
// Spliced into the `FluentIter` trait by `build.rs`. Names resolve in
// the crate-root scope of `lib.rs`, exactly as before the split.

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
