// String concatenation.
//
// Spliced into the `FluentIter` trait by `build.rs`. Names resolve in
// the crate-root scope of `lib.rs`, exactly as before the split.

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
