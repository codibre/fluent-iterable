// Grouping and index building.
//
// Spliced into the `FluentIter` trait by `build.rs`. Names resolve in
// the crate-root scope of `lib.rs`, exactly as before the split.

    /// ⇔ `.group(keyFn)`: **stable** grouping — first-seen key order is
    /// preserved and each group keeps encounter order.
    ///
    /// Note [`Iterator::group_by`] only groups *consecutive* elements,
    /// which is a different operation (that one is `slice::group_by`
    /// territory); this is the npm `group`, which is a full pass.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let grouped = ["b", "a", "b", "c", "a"].into_iter().group_by_stable(|x| *x);
    /// let keys: Vec<_> = grouped.iter().map(|(k, _)| *k).collect();
    /// assert_eq!(keys, vec!["b", "a", "c"]);
    /// assert_eq!(grouped[1].1, vec!["a", "a"]);
    /// ```
    ///
    /// Resolving: grouping is O(N) by nature — an element can extend a
    /// group that was opened first, so no group is final before the whole
    /// source is read. The `Vec` costs the same memory as any buffering
    /// adapter and stays re-iterable; chain it with `.into_iter()` when you
    /// want adapters over the groups.
    fn group_by_stable<K, F>(self, key: F) -> Vec<(K, Vec<Self::Item>)>
    where
        K: Eq + Hash + Clone,
        F: FnMut(&Self::Item) -> K,
    {
        let mut key = key;
        let mut index: HashMap<K, usize> = HashMap::new();
        let mut out: Vec<(K, Vec<Self::Item>)> = Vec::new();
        for item in self {
            let k = key(&item);
            match index.get(&k) {
                Some(&i) => out[i].1.push(item),
                None => {
                    // The group key has two owners — the returned
                    // `(K, Vec<Item>)` and the lookup index — so one K
                    // materializes per GROUP (never per item). Borrowed
                    // keys (`|i| &i.id`) make even this a pointer copy.
                    index.insert(k.clone(), out.len());
                    out.push((k, vec![item]));
                }
            }
        }
        out
    }

    /// ⇔ `.toMap(keyFn, valueFn)`: later entries overwrite earlier ones for
    /// the same key (JS `Map.set` semantics; `HashMap` iteration order is
    /// unspecified, like the JS engine's).
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let items = vec![("k", 1), ("j", 2), ("k", 3)];
    /// let map = items.into_iter().to_map_by(|(k, _)| *k, |(_, v)| *v);
    /// assert_eq!(map.get("k"), Some(&3));
    /// ```
    fn to_map_by<K, V>(
        self,
        mut key: impl FnMut(&Self::Item) -> K,
        mut value: impl FnMut(&Self::Item) -> V,
    ) -> HashMap<K, V>
    where
        K: Eq + Hash,
    {
        self.map(|item| (key(&item), value(&item))).collect()
    }

    /// ⇔ `.toMapChain(k1, k2)`: two-level index — `key1` outer, `key2`
    /// inner, leaves keep encounter order.
    ///
    /// JS chains to an arbitrary number of key functions; Rust fixes the
    /// nested type at depth 2 — deeper nesting is a fold of these layers.
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let rows = [("sp", "sa", 1), ("sp", "rj", 2), ("mg", "sa", 3)];
    /// let index = rows
    ///     .into_iter()
    ///     .to_map_chain(|(a, _, _)| *a, |(_, b, _)| *b);
    /// assert_eq!(index["sp"]["sa"], vec![("sp", "sa", 1)]);
    /// assert_eq!(index["sp"]["rj"], vec![("sp", "rj", 2)]);
    /// ```
    fn to_map_chain<K1, K2>(
        self,
        mut key1: impl FnMut(&Self::Item) -> K1,
        mut key2: impl FnMut(&Self::Item) -> K2,
    ) -> HashMap<K1, HashMap<K2, Vec<Self::Item>>>
    where
        K1: Eq + Hash,
        K2: Eq + Hash,
    {
        let mut out: HashMap<K1, HashMap<K2, Vec<Self::Item>>> = HashMap::new();
        for item in self {
            out.entry(key1(&item))
                .or_default()
                .entry(key2(&item))
                .or_default()
                .push(item);
        }
        out
    }

    /// ⇔ `.toMapChainReduce(k1, k2, reducer)`: two-level index whose leaves
    /// are folded instead of collected. JS folds without an explicit
    /// initial value; Rust demands one (there is no `undefined`).
    ///
    /// ```
    /// use fluent_iterable::FluentIter;
    ///
    /// let rows = [("sp", "sa", 1), ("sp", "sa", 2), ("sp", "rj", 5)];
    /// let totals = rows.into_iter().to_map_chain_reduce(
    ///     |(a, _, _)| *a,
    ///     |(_, b, _)| *b,
    ///     0,
    ///     |acc, (_, _, v)| acc + v,
    /// );
    /// assert_eq!(totals["sp"]["sa"], 3);
    /// assert_eq!(totals["sp"]["rj"], 5);
    /// ```
    fn to_map_chain_reduce<K1, K2, A>(
        self,
        key1: impl FnMut(&Self::Item) -> K1,
        key2: impl FnMut(&Self::Item) -> K2,
        init: A,
        mut reduce: impl FnMut(A, Self::Item) -> A,
    ) -> HashMap<K1, HashMap<K2, A>>
    where
        K1: Eq + Hash,
        K2: Eq + Hash,
        A: Clone,
    {
        self.to_map_chain(key1, key2)
            .into_iter()
            .map(|(k1, inner)| {
                (
                    k1,
                    inner
                        .into_iter()
                        .map(|(k2, items)| {
                            // Each group starts from its OWN accumulator:
                            // one seed clone per group — the value is the
                            // output state, not duplicated data. For Copy
                            // accumulators (numbers, handles) it is free.
                            let acc = items.into_iter().fold(init.clone(), &mut reduce);
                            (k2, acc)
                        })
                        .collect(),
                )
            })
            .collect()
    }
