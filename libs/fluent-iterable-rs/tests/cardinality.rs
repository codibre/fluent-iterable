//! Cardinality family — exercised through the public API.

use fluent_iterable::FluentIter;

mod support;
use support::*;

#[test]
fn has_cardinality_matrix() {
    // source length × n → each predicate, matching comparisonRecipe:
    // count(take(n+1)) `op` n
    let len = |n: usize| (0..n).collect::<Vec<_>>();
    assert!(len(2).into_iter().has_exactly(2));
    assert!(!len(3).into_iter().has_exactly(2));
    assert!(!len(1).into_iter().has_exactly(2));
    // count(take(1)) == 0 → empty sequence hasExactly(0), like the JS
    // comparisonRecipe
    assert!(len(0).into_iter().has_exactly(0));
    assert!(len(1).into_iter().has_less_than(2));
    assert!(!len(2).into_iter().has_less_than(2));
    assert!(len(0).into_iter().has_less_than(1));
    assert!(!len(0).into_iter().has_less_than(0));
    assert!(len(2).into_iter().has_less_or_exactly(2));
    assert!(!len(3).into_iter().has_less_or_exactly(2));
    assert!(len(3).into_iter().has_more_than(2));
    assert!(!len(2).into_iter().has_more_than(2));
    assert!(len(2).into_iter().has_more_or_exactly(2));
    assert!(!len(1).into_iter().has_more_or_exactly(2));
    assert!(len(5).into_iter().has_more_or_exactly(2));
}

#[test]
fn has_cardinality_short_circuits() {
    let (source, counter) = counting(0..1_000_000i64);
    assert!(source.has_more_than(2));
    assert_eq!(counter.get(), 3);

    let (source, counter) = counting(0..1_000_000i64);
    assert!(!source.has_less_than(2));
    assert_eq!(counter.get(), 3);

    let (source, counter) = counting(0..1_000_000i64);
    assert!(source.has_more_or_exactly(2));
    assert_eq!(counter.get(), 2);
}
