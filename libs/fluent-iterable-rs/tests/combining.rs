//! Combining family — exercised through the public API.

use fluent_iterable::FluentIter;
use std::collections::HashSet;

mod support;
use support::*;

#[test]
fn combine_take_stops_inside_the_right_bootstrap() {
    // The first left item's pairs stream out while the right side is
    // still being pulled: take(2) over a left that matches with its head
    // consumes exactly 2 right elements — nothing is pre-scanned.
    let left = [0u32, 0, 1];
    let (right, right_pulls) = counting((0..100u32).map(|i| (0u32, i)));
    let pairs: Vec<(&u32, (u32, u32))> = left
        .iter()
        .combine(right, |l| **l, |r| r.0)
        .take(2)
        .collect();
    assert_eq!(pairs, vec![(&0, (0, 0)), (&0, (0, 1))]);
    assert_eq!(right_pulls.get(), 2, "take(k) stops mid right-side scan");

    // Once a *second* left item needs matches the scan completes — and
    // every right element is still consumed exactly once, in order.
    let (right, right_pulls) = counting((0..100u32).map(|i| (0u32, i)));
    let pairs: Vec<(u32, u32)> = left
        .iter()
        .combine(right, |l| **l, |r| r.0)
        .map(|(l, r)| (*l, r.1))
        .collect();
    assert_eq!(pairs.len(), 200, "both left items fan out over the index");
    assert_eq!(right_pulls.get(), 100, "the right side is read once, ever");
    assert_eq!(
        pairs[100],
        (0, 0),
        "second left restarts the bucket in order"
    );
}

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
fn combine_fanout_shares_handles_and_never_clones() {
    // Copy-handle contract: borrows are shared into every pair, so a
    // fan-out multiplies pointers — never data. (The owned-pair shape
    // this contract replaced cloned all but one copy per fan-out.)
    let left = [String::from("a"), String::from("a")];
    let right = [String::from("a1"), String::from("a2")];
    let joined: Vec<(&String, &String)> = left
        .iter()
        .combine(right.iter(), |l| l[..1].to_owned(), |r| r[..1].to_owned())
        .collect();
    let shapes: Vec<(&str, &str)> = joined
        .into_iter()
        .map(|(l, r)| (l.as_str(), r.as_str()))
        .collect();
    assert_eq!(
        shapes,
        vec![("a", "a1"), ("a", "a2"), ("a", "a1"), ("a", "a2"),]
    );
}

#[test]
fn combine_shares_counted_inputs_without_cloning() {
    // Fan-out over borrows of a clone-counting payload: every pair
    // shares the originals, so a correct join must observe zero clones
    // whatever the multiplicity.
    let (counter, left) = counted_items(3);
    let right = [(0u64, "x"), (0, "y"), (1, "z"), (2, "w")];
    let joined: Vec<(u64, &str)> = left
        .iter()
        .combine(right.iter(), |l| l.id, |(k, _)| *k)
        .map(|(l, (_, name))| (l.id, *name))
        .collect();
    assert_eq!(joined, vec![(0, "x"), (0, "y"), (1, "z"), (2, "w")]);
    assert_eq!(
        counter.get(),
        0,
        "pairs share the inputs; combine clones nothing"
    );
}

#[test]
fn combine_join_unique_folds_clone_nothing() {
    // 1:1 folds over referenced payloads: handles fan out into rows and
    // the counting payload is never cloned — nor could it be by value,
    // the contract takes Copy handles only.
    let (counter, items) = counted_items(9);
    let mut items = items;
    for item in items.iter_mut() {
        item.id %= 3;
    }
    let (a, rest) = items.split_at(3);
    let (b, c) = rest.split_at(3);

    let rows = [a, b, c].into_iter().combine_join(|item| item.id);
    let shape: Vec<Vec<u64>> = rows
        .iter()
        .map(|row| row.iter().map(|item| item.id).collect())
        .collect();
    assert_eq!(shape, vec![vec![0, 0, 0], vec![1, 1, 1], vec![2, 2, 2]]);
    assert_eq!(
        counter.get(),
        0,
        "handles shared into rows; payload untouched"
    );
}

#[test]
fn combine_join_fanout_shares_cells_without_cloning() {
    // Full fan-out (two rows, two cells, one shared key): rows multiply
    // by four, cells stay shared handles — the payload is never cloned
    // at any multiplicity.
    let (ca, mut a) = counted_items(2);
    let (cb, mut b) = counted_items(2);
    for item in a.iter_mut() {
        item.id = 0;
    }
    for item in b.iter_mut() {
        item.id = 0;
    }
    let rows = [a.as_slice(), b.as_slice()]
        .into_iter()
        .combine_join(|item| item.id);
    assert_eq!(rows.len(), 4, "2 rows x 2 cells");
    assert!(rows.iter().all(|r| r.len() == 2));
    assert_eq!(
        ca.get() + cb.get(),
        0,
        "fan-out multiplies handles, never payloads"
    );
}

#[test]
fn combine_join_accepts_one_shot_streams() {
    // The last-child row move walks BACK only the join's own indexed
    // buckets (`Vec<T>` collected internally, as master always did) —
    // never a caller iterator. `from_fn` is not a `DoubleEndedIterator`,
    // so this compiles and folds correctly only because the public API
    // adds no back-iteration requirement: single-pass streams stay valid
    // inputs, each consumed forward exactly once.
    let pulls = std::rc::Rc::new(std::cell::Cell::new(0u32));
    let stream = |names: &'static [&'static str]| {
        let pulls = pulls.clone();
        let mut i = 0usize;
        std::iter::from_fn(move || {
            if i < names.len() {
                let item = (i as i32 + 1, names[i]);
                i += 1;
                pulls.set(pulls.get() + 1);
                Some(item)
            } else {
                None
            }
        })
    };
    let outer = std::iter::from_fn({
        let mut k = 0u32;
        move || {
            k += 1;
            match k {
                1 => Some(stream(&["a1", "a2", "a3"])),
                2 => Some(stream(&["b1", "b2", "b3"])),
                3 => Some(stream(&["c1", "c2", "c3"])),
                _ => None,
            }
        }
    });

    let rows = outer.combine_join(|(key, _)| *key);
    let shape: Vec<Vec<&str>> = rows
        .iter()
        .map(|row| row.iter().map(|(_, v)| *v).collect())
        .collect();
    assert_eq!(
        shape,
        vec![
            vec!["a1", "b1", "c1"],
            vec!["a2", "b2", "c2"],
            vec!["a3", "b3", "c3"]
        ]
    );
    assert_eq!(pulls.get(), 9, "each stream drained once, never rewound");
}
