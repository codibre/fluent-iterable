// Tests for the grouping family (spliced into `lib.rs`'s test module).

    #[test]
    fn stable_group_order() {
        let items = ["b", "a", "b", "c", "a"];
        let grouped = items.into_iter().group_by_stable(|x| *x);
        let keys: Vec<_> = grouped.iter().map(|(k, _)| *k).collect();
        assert_eq!(keys, vec!["b", "a", "c"]);
        assert_eq!(grouped[1].1, vec!["a", "a"]);
    }


    #[test]
    fn to_map_chain_builds_nested_leaves() {
        let rows = [
            ("sp", "sa", 1),
            ("sp", "rj", 2),
            ("sp", "sa", 3),
            ("mg", "sa", 4),
        ];
        let index = rows
            .into_iter()
            .to_map_chain(|(a, _, _)| *a, |(_, b, _)| *b);
        assert_eq!(index.len(), 2);
        assert_eq!(
            index["sp"]["sa"]
                .iter()
                .map(|(_, _, v)| *v)
                .collect::<Vec<_>>(),
            vec![1, 3]
        );
        assert_eq!(index["sp"]["rj"].len(), 1);
        assert_eq!(index["mg"]["sa"].len(), 1);
    }


    #[test]
    fn to_map_chain_reduce_folds_leaves() {
        let rows = [("sp", "sa", 1), ("sp", "sa", 2), ("sp", "rj", 5)];
        let totals = rows.into_iter().to_map_chain_reduce(
            |(a, _, _)| *a,
            |(_, b, _)| *b,
            0,
            |acc, (_, _, v)| acc + v,
        );
        assert_eq!(totals["sp"]["sa"], 3);
        assert_eq!(totals["sp"]["rj"], 5);
        assert!(!totals.contains_key("mg"));
    }


    #[test]
    fn to_map_last_write_wins() {
        let items = vec![("k", 1), ("j", 2), ("k", 3)];
        let map = items.into_iter().to_map_by(|(k, _)| *k, |(_, v)| *v);
        assert_eq!(map.get("k"), Some(&3));
        assert_eq!(map.get("j"), Some(&2));
        assert_eq!(map.len(), 2);
    }

    // ---- lazy adapters ----
