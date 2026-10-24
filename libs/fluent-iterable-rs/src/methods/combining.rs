// Equi-joins.
//
// Spliced into the `FluentIter` trait by `build.rs`. Names resolve in
// the crate-root scope of `lib.rs`, exactly as before the split.

    /// ⇔ `.combine(other, keySelf, keyOther)`: inner equi-join yielding
    /// **all** matching `(left, right)` pairs in left order (right side is
    /// indexed for `O(n + m)`; duplicate keys explode into pairs exactly
    /// like the JS side).
    ///
    /// JS shares object references between pairs; Rust must clone to hand
    /// owned pairs out. Joining iterators *of references*
    /// (`a.iter().combine(b.iter(), …)`) keeps the clone pointer-cheap.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let left = [1, 2, 1];
    /// let right = [(1, "x"), (1, "y"), (3, "z")];
    /// let joined: Vec<(&i32, &(i32, &str))> =
    ///     left.iter().combine(right.iter(), |l| **l, |(k, _)| *k).collect();
    /// let shape: Vec<(i32, &str)> =
    ///     joined.into_iter().map(|(l, (_, n))| (*l, *n)).collect();
    /// assert_eq!(shape, vec![(1, "x"), (1, "y"), (1, "x"), (1, "y")]);
    /// ```
    ///
    /// Lazy: the right side is indexed on the first pull, the left side
    /// streams — `take(k)` stops the left walk at `k` pairs.
    fn combine<J, K, KL, KR>(
        self,
        other: J,
        key_left: KL,
        key_right: KR,
    ) -> Combine<Self, J::IntoIter, K, KL, KR>
    where
        J: IntoIterator,
        K: Eq + Hash + Clone,
        KL: FnMut(&Self::Item) -> K,
        KR: FnMut(&J::Item) -> K,
        Self::Item: Clone,
        J::Item: Clone,
    {
        Combine {
            left: self,
            key_left,
            right: other.into_iter(),
            key_right,
            indexed: false,
            idx: HashMap::new(),
            pending: None,
        }
    }

    /// ⇔ `.combineJoin(baseKey)` on an iterator **of iterables**: reduces
    /// the whole family into one table of rows by a shared key — inner
    /// join, pairwise folded (`n` iterables produce rows of length `n`).
    /// The key is taken from the row's first element, exactly like the JS
    /// `([a]) => key(a)`. Once a fold step matches nothing the result is
    /// empty and stays empty.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let a = [(1, "a1"), (2, "a2")];
    /// let b = [(1, "b1"), (2, "b2")];
    /// let c = [(1, "c1")];
    /// let rows = [a.as_slice(), b.as_slice(), c.as_slice()]
    ///     .into_iter()
    ///     .combine_join(|(k, _)| *k);
    /// assert_eq!(rows.len(), 1);
    /// assert_eq!(
    ///     rows[0].iter().map(|(_, v)| *v).collect::<Vec<_>>(),
    ///     vec!["a1", "b1", "c1"]
    /// );
    /// ```
    ///
    /// Resolving, like [`group_by_stable`][FluentIter::group_by_stable]:
    /// the fold reads every iterable before any row is final, so the row
    /// table comes back as a `Vec` instead of a buffering wrapper.
    fn combine_join<T, K, F>(self, key: F) -> Vec<Vec<T>>
    where
        Self::Item: IntoIterator<Item = T>,
        K: Eq + Hash,
        T: Clone,
        F: FnMut(&T) -> K,
    {
        let mut key = key;
        let mut acc: Vec<Vec<T>> = Vec::new();
        let mut first = true;
        for iterable in self {
            let items: Vec<T> = iterable.into_iter().collect();
            if first {
                first = false;
                acc = items.into_iter().map(|item| vec![item]).collect();
                continue;
            }
            if acc.is_empty() {
                continue;
            }
            let mut idx: HashMap<K, Vec<T>> = HashMap::new();
            for item in items {
                idx.entry(key(&item)).or_default().push(item);
            }
            let mut next_acc = Vec::new();
            for row in acc {
                // Rows are non-empty by construction; their key never
                // changes across folds (inner-join invariant).
                if let Some(bucket) = idx.get(&key(&row[0])) {
                    for item in bucket {
                        let mut grown = row.clone();
                        grown.push(item.clone());
                        next_acc.push(grown);
                    }
                }
            }
            acc = next_acc;
        }
        acc
    }
