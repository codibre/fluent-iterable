// Tests for the statistics family (spliced into `lib.rs`'s test module).

    #[test]
    fn avg_handles_ints_floats_and_empty() {
        assert_eq!([2, 4, 6].into_iter().avg(), Some(4.0));
        assert_eq!(std::iter::empty::<i32>().avg(), None);
        let rows = [("x", 10.0), ("y", 20.0)];
        assert_eq!(rows.into_iter().avg_by(|(_, v)| *v), Some(15.0));
        assert_eq!(std::iter::empty::<&str>().avg_by(|_| 1.0), None);
    }
