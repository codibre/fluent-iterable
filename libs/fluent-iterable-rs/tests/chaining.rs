//! End-to-end chaining tests through the public API surface.

use fluent_iterable::FluentIter;

#[test]
fn chaining_matches_readme_example() {
    let rows = [("sa", 10), ("sp", 30), ("sa", 25)];
    let by_state = rows.into_iter().group_by_stable(|(s, _)| *s);
    assert_eq!(by_state[0].1, vec![("sa", 10), ("sa", 25)]);
    let report = rows
        .into_iter()
        .map(|(_, v)| v)
        .join_by(|v| format!("{v:>4}"), " | ");
    assert_eq!(report, "  10 |   30 |   25");
}
