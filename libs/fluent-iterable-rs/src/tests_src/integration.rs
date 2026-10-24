// Cross-family chaining tests (need the counting support helper).

    #[test]
    fn full_pass_ops_resolve_eagerly() {
        // 0.0.4 design rule: operations whose first result is not final
        // until the source is drained resolve immediately to Vec — no
        // buffering wrapper pretending to be lazy. Distinct-by and combine
        // keep real laziness (their short-circuit tests live beside this).
        let (source, counter) = counting([3, 1, 2].into_iter());
        let grouped = source.group_by_stable(|x| *x);
        assert_eq!(counter.get(), 3);
        assert_eq!(grouped.len(), 3); // re-iterable result

        let (source, counter) = counting([3, 1, 2].into_iter());
        let sorted = source.sorted();
        assert_eq!(counter.get(), 3);
        assert_eq!(sorted.first(), Some(&1)); // Vec's inherent first

        let (source, counter) = counting([vec![1, 2], vec![1, 2]].into_iter());
        let rows = source.combine_join(|x| *x);
        assert_eq!(counter.get(), 2);
        assert_eq!(rows, vec![vec![1, 1], vec![2, 2]]);
    }


    #[test]
    fn resolving_results_and_streaming_adapters_chain() {
        // Resolving ops return Vec: std Vec methods work directly and the
        // result re-iterates; adapters expose std Iterator methods (the
        // 0.0.3 phantom-K trap must never come back — if K drifts out of a
        // struct's parameters again, `next`/`count` stop resolving here).
        let rows = [("b", 1), ("a", 2), ("b", 3)];
        let asc = rows.into_iter().sort_by(|(_, v)| *v);
        assert_eq!(asc.first().copied(), Some(("b", 1))); // minimum by key
        assert_eq!(asc.len(), 3);
        let desc2: Vec<_> = rows
            .into_iter()
            .sort_by_desc(|(_, v)| *v)
            .into_iter()
            .take(2)
            .collect();
        assert_eq!(desc2, vec![("b", 3), ("a", 2)]);
        let (source, counter) = counting([1, 1, 2, 3].into_iter());
        assert_eq!(source.distinct().count(), 3);
        assert_eq!(counter.get(), 4);
        let mut joined = [1].iter().combine([(1, "x")].iter(), |l| **l, |(k, _)| *k);
        assert_eq!(joined.next(), Some((&1, &(1, "x"))));
        let grouped = rows.into_iter().group_by_stable(|(_, v)| *v % 2);
        assert_eq!(grouped.len(), 2);
    }
