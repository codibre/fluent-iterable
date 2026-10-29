// Distinctness: lazy dedup and short-circuiting checks.
//
// Spliced into the `FluentIter` trait by `build.rs`. Names resolve in
// the crate-root scope of `lib.rs`, exactly as before the split.

    /// ⇔ `.distinct()` on hashable items: keeps the **first** occurrence of
    /// every item. Lazy — buffers only the seen-set, and short-circuits
    /// downstream (`take(k)` stops pulling once `k` uniques are out).
    ///
    /// `Item` must be `Copy` — the same handle contract as the joins: the
    /// seen-set stores handles (typically `&T`), never the object behind
    /// them, so deduping deep values copies pointers instead of payloads.
    /// Hash/equality run on the referents, so `.iter().distinct()` dedups
    /// **by value** through the handles. For owned, transient streams
    /// (where nothing persists to point at), dedup inherently means
    /// retaining a copy of every unique value — make that explicit with
    /// [`FluentIter::distinct_by`], which *moves* each key into its set
    /// and copies nothing either way.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let out: Vec<i32> = [1, 2, 1, 3, 2].into_iter().distinct().collect();
    /// assert_eq!(out, vec![1, 2, 3]);
    ///
    /// // Deep payloads: handles in, handles out — nothing is cloned.
    /// let names = vec!["alice".to_string(), "bob".to_string(), "alice".to_string()];
    /// let uniq: Vec<&String> = names.iter().distinct().collect();
    /// assert_eq!(uniq, vec!["alice", "bob"]);
    /// ```
    fn distinct(self) -> Distinct<Self>
    where
        Self::Item: Eq + Hash + Copy,
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
    /// The key is **moved** into the set, so nothing is cloned on the
    /// library's side; for zero copies end to end, return a *borrowed*
    /// key from `keyFn` (e.g. `|offer| &offer.id`) instead of an owned one.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let out: Vec<&str> = ["bb", "a1", "b1", "a2", "c"]
    ///     .into_iter()
    ///     .distinct_by(|s| s.chars().next().unwrap())
    ///     .collect();
    /// assert_eq!(out, vec!["bb", "a1", "c"]);
    ///
    /// // Borrowed keys: the set stores &str into the items' own storage.
    /// let words = vec!["apple".to_string(), "avocado".to_string(), "banana".to_string()];
    /// let first_letter: Vec<&String> = words.iter().distinct_by(|w| &w[..1]).collect();
    /// assert_eq!(first_letter, vec!["apple", "banana"]);
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
