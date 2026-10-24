// Tests for the folds family (spliced into `lib.rs`'s test module).

    #[test]
    fn contains_compares_and_short_circuits() {
        assert!(["a", "b"].into_iter().contains(&"b"));
        assert!(!["a", "b"].into_iter().contains(&"c"));
        let (source, counter) =
            counting(vec![String::from("x"), String::from("hit"), String::from("y")].into_iter());
        assert!(source.contains(&String::from("hit")));
        assert_eq!(counter.get(), 2);
    }


    #[test]
    fn reduce_and_map_folds_then_projects() {
        let report =
            [1, 2, 3]
                .into_iter()
                .reduce_and_map(0, |acc, x| acc + x, |sum| format!("total {sum}"));
        assert_eq!(report, "total 6");
        let count = std::iter::empty::<i32>().reduce_and_map(0, |a, _| a + 1, |c| c);
        assert_eq!(count, 0);
    }
