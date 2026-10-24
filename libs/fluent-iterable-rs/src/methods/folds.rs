// Fold-then-project and membership.
//
// Spliced into the `FluentIter` trait by `build.rs`. Names resolve in
// the crate-root scope of `lib.rs`, exactly as before the split.

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
