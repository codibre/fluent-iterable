//! Sorting family — exercised through the public API.

use fluent_iterable::FluentIter;

#[test]
fn sort_family_is_stable() {
    let rows = [("b", 1), ("a", 2), ("b", 3), ("a", 1)];
    let by_value = rows.into_iter().sort_by(|(_, v)| *v);
    // ties (value 1 then 2..): encounter order preserved
    assert_eq!(by_value, vec![("b", 1), ("a", 1), ("a", 2), ("b", 3)]);
    let desc = rows.into_iter().sort_by_desc(|(_, v)| *v);
    assert_eq!(desc, vec![("b", 3), ("a", 2), ("b", 1), ("a", 1)]);
    let asc: Vec<u8> = [3u8, 1, 2].into_iter().sorted();
    assert_eq!(asc, vec![1, 2, 3]);
    let custom: Vec<i32> = [1, 2, 3].into_iter().sort_with(|a, b| b.cmp(a));
    assert_eq!(custom, vec![3, 2, 1]);
}
