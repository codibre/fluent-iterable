//! Distinct family — exercised through the public API.

use fluent_iterable::FluentIter;

mod support;
use support::*;

#[test]
fn distinct_by_is_lazy_and_short_circuits() {
    // take(k) must stop pulling the source at the k-th distinct key —
    // impossible for an eager implementation (the design bug this
    // replaced).
    let (source, counter) = counting([1, 1, 2, 2, 3, 3, 4, 4].into_iter());
    let out: Vec<i32> = source.distinct_by(|x| *x).take(2).collect();
    assert_eq!(out, vec![1, 2]);
    assert_eq!(counter.get(), 3); // pulled up to the second `2`, no further
}

#[test]
fn distinct_is_lazy_and_short_circuits() {
    let (source, counter) = counting([1, 1, 2, 3, 3, 3, 4].into_iter());
    let out: Vec<i32> = source.distinct().take(2).collect();
    assert_eq!(out, vec![1, 2]);
    // stopped right after discovering 2 (never walked the tail)
    assert!(counter.get() <= 4, "consumed {}", counter.get());
}

#[test]
fn distinct_keeps_first_per_key() {
    let items = ["bb", "a1", "b1", "a2", "c"];
    let out: Vec<_> = items
        .into_iter()
        .distinct_by(|s| s.chars().next().unwrap())
        .collect();
    assert_eq!(out, vec!["bb", "a1", "c"]);
}

#[test]
fn is_distinct_by_short_circuits() {
    assert!([("a", 1), ("b", 2)].into_iter().is_distinct_by(|(k, _)| *k));
    let (source, counter) = counting([("a", 1), ("b", 2), ("a", 3), ("b", 4)].into_iter());
    assert!(!source.is_distinct_by(|(k, _)| *k));
    assert_eq!(counter.get(), 3);
}

#[test]
fn is_distinct_checks_and_short_circuits() {
    assert!([1, 2, 3].into_iter().is_distinct());
    assert!(std::iter::empty::<i32>().is_distinct());
    let (source, counter) = counting([1, 2, 1, 2, 1].into_iter());
    assert!(!source.is_distinct());
    assert_eq!(counter.get(), 3);
}
