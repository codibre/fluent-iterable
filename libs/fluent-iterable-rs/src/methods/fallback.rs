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

    /// ⇔ `.repeat(n)`: yield the whole sequence `n` times. `Item` must be
    /// `Copy` — the same handle contract as the joins and dedup: the cache
    /// retains handles, so every pass replays pointers to the originals
    /// (JS repeats the same object references; nothing is duplicated per
    /// pass). `n == 0` yields nothing and never consumes the source;
    /// `n == 1` streams without caching at all. Unlike `std`'s
    /// nightly-only `cycle`, this is finite. For owned, transient streams,
    /// materialize at the source (e.g. `.map(|v| v.clone())`) where the
    /// duplication is actually wanted.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let out: Vec<i32> = [1, 2].into_iter().repeat(3).collect();
    /// assert_eq!(out, vec![1, 2, 1, 2, 1, 2]);
    ///
    /// let out: Vec<i32> = [1, 2].into_iter().repeat(0).collect();
    /// assert!(out.is_empty());
    ///
    /// // Deep payloads: every pass replays the same handles — nothing copies.
    /// let words = vec!["go".to_string(), "stop".to_string()];
    /// let out: Vec<&String> = words.iter().repeat(2).collect();
    /// assert_eq!(out, vec![&words[0], &words[1], &words[0], &words[1]]);
    /// ```
    fn repeat(self, times: usize) -> Repeat<Self>
    where
        Self::Item: Copy,
    {
        Repeat {
            source: self,
            cache: Vec::new(),
            times,
            round: 0,
            pos: 0,
        }
    }
