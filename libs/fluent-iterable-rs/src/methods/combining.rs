// Equi-joins.
//
// Spliced into the `FluentIter` trait by `build.rs`. Names resolve in
// the crate-root scope of `lib.rs`, exactly as before the split.

    /// ⇔ `.combine(other, keySelf, keyOther)`: inner equi-join yielding
    /// **all** matching `(left, right)` pairs in left order (right side is
    /// indexed for `O(n + m)`; duplicate keys explode into pairs exactly
    /// like the JS side).
    ///
    /// JS shares object references between pairs; Rust does too — the
    /// contract is `Copy` handles. Join borrows
    /// (`a.iter().combine(b.iter(), …)` yields `(&T, &U)` pairs and the
    /// containers stay in the caller's hands), so fan-out multiplies
    /// pointers and `combine` never deep-copies joined data. Breaking
    /// change from the owned-pair shape: joining owned non-`Copy` items
    /// by value cloned every pair but one, and the bound now rules that
    /// shape out at compile time instead of documenting it away.
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
    /// Lazy on both sides: the *first* left item is walked against the
    /// raw right stream and yields its pairs while the index is built;
    /// from the second left item on the index is complete and only the
    /// left side streams. `take(k)` can stop before the right side is
    /// drained. Adapter memory is O(right) — pairs never accumulate.
    fn combine<J, K, KL, KR>(
        self,
        other: J,
        key_left: KL,
        key_right: KR,
    ) -> Combine<Self, J::IntoIter, K, KL, KR>
    where
        J: IntoIterator,
        K: Eq + Hash,
        KL: FnMut(&Self::Item) -> K,
        KR: FnMut(&J::Item) -> K,
        Self::Item: Copy,
        J::Item: Copy,
    {
        Combine {
            left: self,
            key_left,
            right: other.into_iter(),
            key_right,
            indexed: false,
            boot: None,
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
    ///
    /// Elements are `Copy` handles (references or `Copy` payloads), so
    /// the fold never copies payload data at any fan-out: rows fan out
    /// over shared handles, cloning only the row *container* (a memcpy
    /// of handles) for every child but the last, which takes the row
    /// itself by move. Deep payloads participate by reference — rows of
    /// `&T` borrowed from the caller's own containers — mirroring the
    /// JS side, whose rows share object references.
    fn combine_join<T, K, F>(self, key: F) -> Vec<Vec<T>>
    where
        Self::Item: IntoIterator<Item = T>,
        K: Eq + Hash,
        T: Copy,
        F: FnMut(&T) -> K,
    {
        let mut key = key;
        let mut acc: Vec<Vec<T>> = Vec::new();
        let mut first = true;
        for iterable in self {
            if first {
                first = false;
                acc = iterable.into_iter().map(|item| vec![item]).collect();
                continue;
            }
            if acc.is_empty() {
                continue;
            }
            let mut idx: HashMap<K, Vec<T>> = HashMap::new();
            for item in iterable.into_iter() {
                idx.entry(key(&item)).or_default().push(item);
            }
            let mut next_acc = Vec::new();
            for row in acc {
                // Rows are non-empty by construction; their key never
                // changes across folds (inner-join invariant).
                let k = key(&row[0]);
                let Some(bucket) = idx.get(&k) else {
                    continue;
                };
                // Cells are handles: handing one to each row copies 16
                // bytes, never the payload, so every row takes the same
                // path at any fan-out. Rows clone `row` (the container)
                // for every child but the last, which takes the row by
                // move — `next_back` walks back only the join's own
                // bucket `Vec`, never a caller iterator.
                let mut children = bucket.iter().copied();
                if let Some(last) = children.next_back() {
                    for child in children {
                        // Exact-size single allocation: clone+push
                        // would allocate twice and memcpy the row
                        // twice on every fold generation.
                        next_acc.push(row.iter().copied().chain(std::iter::once(child)).collect());
                    }
                    let mut grown = row;
                    grown.push(last);
                    next_acc.push(grown);
                }
            }
            acc = next_acc;
        }
        acc
    }
