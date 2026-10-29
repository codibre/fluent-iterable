// String concatenation.
//
// Spliced into the `FluentIter` trait by `build.rs`. Names resolve in
// the crate-root scope of `lib.rs`, exactly as before the split.

    /// ⇔ `.join(sep)`: display every item with the separator between.
    /// (JS skips nullish items; Rust has neither, every item is shown.)
    ///
    /// Formats straight into the output buffer — no intermediate
    /// `Vec<String>` and no per-item `String`, the way the npm version
    /// concatenates without boxing each element.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// assert_eq!([1, 2, 3].into_iter().join(", "), "1, 2, 3");
    /// ```
    fn join(mut self, separator: &str) -> String
    where
        Self::Item: Display,
    {
        let mut out = String::new();
        if let Some(item) = self.next() {
            // Writing into a String never fails (no io behind it).
            let _ = out.write_fmt(format_args!("{item}"));
            for item in self {
                out.push_str(separator);
                let _ = out.write_fmt(format_args!("{item}"));
            }
        }
        out
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
        mut self,
        mut value: impl FnMut(&Self::Item) -> S,
        separator: &str,
    ) -> String {
        let mut out = String::new();
        if let Some(item) = self.next() {
            let _ = out.write_fmt(format_args!("{}", value(&item)));
            for item in self {
                out.push_str(separator);
                let _ = out.write_fmt(format_args!("{}", value(&item)));
            }
        }
        out
    }
