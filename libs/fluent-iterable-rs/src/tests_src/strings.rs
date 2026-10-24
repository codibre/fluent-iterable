// Tests for the strings family (spliced into `lib.rs`'s test module).

    #[test]
    fn join_displays_and_projects() {
        assert_eq!([1, 2, 3].into_iter().join(", "), "1, 2, 3");
        assert_eq!(std::iter::empty::<i32>().join(","), "");
        let out = [1, 2].into_iter().join_by(|v| format!("{v:>3}"), "-");
        assert_eq!(out, "  1-  2");
    }
