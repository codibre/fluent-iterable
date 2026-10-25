//! Combining family — exercised through the public API.

use fluent_iterable::FluentIter;
use std::collections::HashSet;

mod support;
use support::*;

#[test]
fn combine_all_pairs_left_order() {
    let left = [1, 2, 1];
    let right = [(1, "x"), (1, "y"), (3, "z")];
    let joined: Vec<_> = left
        .iter()
        .combine(right.iter(), |l| **l, |(k, _)| *k)
        .collect();
    assert_eq!(joined.len(), 4);
    let shapes: Vec<(i32, &str)> = joined
        .into_iter()
        .map(|(l, (_, name))| (*l, *name))
        .collect();
    assert_eq!(shapes, vec![(1, "x"), (1, "y"), (1, "x"), (1, "y")]);
}

#[test]
fn combine_indexes_right_on_first_pull_and_streams_left() {
    let (left, left_pulls) = counting([1, 2, 3, 1, 2, 3].into_iter());
    let right = [(1, "x")];
    let mut joined = left.combine(right, |l| *l, |(k, _)| *k);
    assert_eq!(left_pulls.get(), 0);
    assert_eq!(joined.next(), Some((1, (1, "x"))));
    // left stopped at the first matching element: no full left scan
    assert_eq!(left_pulls.get(), 1);
    assert_eq!(joined.next(), Some((1, (1, "x"))));
    assert_eq!(joined.next(), None);
}

// ---- resolving terminals ----

#[test]
fn combine_join_drops_keys_missing_from_any_iterable() {
    let a = [(1, "a1"), (2, "a2")];
    let b = [(1, "b1")];
    let c = [(2, "c2")];
    // key 1 dies at `c`, key 2 died at `b` → empty
    let rows = [a.as_slice(), b.as_slice(), c.as_slice()]
        .into_iter()
        .combine_join(|(k, _)| *k);
    assert!(rows.is_empty());
}

#[test]
fn combine_join_folds_iterables_by_key() {
    let a = [(1, "a1"), (2, "a2")];
    let b = [(1, "b1"), (2, "b2")];
    let c = [(1, "c1")];
    let rows = [a.as_slice(), b.as_slice(), c.as_slice()]
        .into_iter()
        .combine_join(|(k, _)| *k);
    assert_eq!(rows.len(), 1);
    assert_eq!(
        rows[0].iter().map(|(_, v)| *v).collect::<Vec<_>>(),
        vec!["a1", "b1", "c1"]
    );
}

#[test]
fn combine_join_multiplies_duplicate_keys() {
    let a = [(1, "a1"), (1, "a2")];
    let b = [(1, "b1")];
    let rows = [a.as_slice(), b.as_slice()]
        .into_iter()
        .combine_join(|(k, _)| *k);
    assert_eq!(rows.len(), 2);
    assert_eq!(
        HashSet::from_iter(rows.iter().map(|r| r[0].1)),
        HashSet::from(["a1", "a2"])
    );
}

#[test]
fn combine_join_of_nothing_is_empty() {
    let rows = std::iter::empty::<&[(i32, &str)]>().combine_join(|(k, _)| *k);
    assert!(rows.is_empty());
}

#[test]
fn combine_owned_items_fan_out_clones() {
    let left = vec![String::from("a"), String::from("a")];
    let right = vec![String::from("a1"), String::from("a2")];
    let joined = left
        .into_iter()
        .combine(right, |l| l.clone(), |r| r[..1].to_owned());
    let shapes: Vec<(String, String)> = joined.into_iter().collect();
    assert_eq!(
        shapes,
        vec![
            ("a".to_owned(), "a1".to_owned()),
            ("a".to_owned(), "a2".to_owned()),
            ("a".to_owned(), "a1".to_owned()),
            ("a".to_owned(), "a2".to_owned()),
        ]
    );
}
