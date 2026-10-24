// Numeric averaging.
//
// Spliced into the `FluentIter` trait by `build.rs`. Names resolve in
// the crate-root scope of `lib.rs`, exactly as before the split.

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
