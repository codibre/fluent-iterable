// Empty-source fallback and finite repetition.
//
// Spliced into the `FluentIter` trait by `build.rs`. Names resolve in
// the crate-root scope of `lib.rs`, exactly as before the split.

    /// ⇔ `.whenEmpty(fallback)`: yield from the source; if it produces
    /// **nothing**, yield the fallback instead. A non-empty source never
    /// touches the fallback iterable.
    ///
    /// Unlike JS the fallback must yield the same `Item` type — map it
    /// first if it doesn't.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let empty: [i32; 0] = [];
    /// let out: Vec<i32> = empty.into_iter().when_empty([7, 8]).collect();
    /// assert_eq!(out, vec![7, 8]);
    ///
    /// let out: Vec<i32> = [1].into_iter().when_empty([7, 8]).collect();
    /// assert_eq!(out, vec![1]);
    /// ```
    fn when_empty<F>(self, fallback: F) -> WhenEmpty<Self, F>
    where
        F: IntoIterator<Item = Self::Item>,
    {
        WhenEmpty {
            phase: WhenEmptyPhase::Source(self, false),
            fallback: Some(fallback),
        }
    }

    /// ⇔ `.repeat(n)`: yield the whole sequence `n` times (first pass
    /// streams and caches, later passes replay). `n == 0` yields nothing
    /// and never consumes the source. Unlike `std`'s nightly-only `cycle`,
    /// this is finite.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let out: Vec<i32> = [1, 2].into_iter().repeat(3).collect();
    /// assert_eq!(out, vec![1, 2, 1, 2, 1, 2]);
    ///
    /// let out: Vec<i32> = [1, 2].into_iter().repeat(0).collect();
    /// assert!(out.is_empty());
    /// ```
    fn repeat(self, times: usize) -> Repeat<Self>
    where
        Self::Item: Clone,
    {
        Repeat {
            source: self,
            cache: Vec::new(),
            times,
            round: 0,
            pos: 0,
        }
    }
