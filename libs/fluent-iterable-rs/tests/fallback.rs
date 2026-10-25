//! Fallback family — exercised through the public API.

use fluent_iterable::FluentIter;

mod support;
use support::*;

#[test]
fn repeat_of_empty_source_is_empty() {
    let out: Vec<i32> = std::iter::empty::<i32>().repeat(4).collect();
    assert!(out.is_empty());
}

#[test]
fn repeat_replays_whole_sequence() {
    let out: Vec<i32> = [1, 2].into_iter().repeat(3).collect();
    assert_eq!(out, vec![1, 2, 1, 2, 1, 2]);
    let out: Vec<i32> = [1, 2].into_iter().repeat(1).collect();
    assert_eq!(out, vec![1, 2]);
}

#[test]
fn repeat_streams_first_pass_before_replaying() {
    let (source, counter) = counting([1, 2, 3].into_iter());
    let mut rep = source.repeat(2);
    assert_eq!(rep.next(), Some(1));
    // only one item pulled so far: the first pass is streaming
    assert_eq!(counter.get(), 1);
    assert_eq!(rep.next(), Some(2));
    assert_eq!(rep.next(), Some(3));
    assert_eq!(rep.next(), Some(1)); // replay started
    assert_eq!(rep.count(), 2);
}

#[test]
fn repeat_zero_never_consumes_source() {
    let (source, counter) = counting([1, 2, 3].into_iter());
    let out: Vec<i32> = source.repeat(0).collect();
    assert!(out.is_empty());
    assert_eq!(counter.get(), 0);
}

#[test]
fn when_empty_falls_back_after_late_first_value_absent() {
    // source yields nothing but is polled several times before giving up
    let (source, counter) = counting(std::iter::empty::<i32>());
    let out: Vec<i32> = source.when_empty([9]).collect();
    assert_eq!(out, vec![9]);
    assert_eq!(counter.get(), 0);
}

#[test]
fn when_empty_uses_fallback_only_for_empty_source() {
    let empty: [i32; 0] = [];
    let out: Vec<i32> = empty.into_iter().when_empty([7, 8]).collect();
    assert_eq!(out, vec![7, 8]);

    let (fallback_source, fallback_counter) = counting([7, 8].into_iter());
    let out: Vec<i32> = [1, 2].into_iter().when_empty(fallback_source).collect();
    assert_eq!(out, vec![1, 2]);
    assert_eq!(fallback_counter.get(), 0, "fallback must stay untouched");
}

#[test]
fn when_empty_with_empty_fallback_is_empty() {
    let empty: [i32; 0] = [];
    let out: Vec<i32> = empty.into_iter().when_empty(empty).collect();
    assert!(out.is_empty());
}

#[test]
fn repeat_replays_handles_and_never_clones() {
    // Handle contract: every pass replays pointers to the originals —
    // no payload copy happens on any pass, at any multiplicity.
    let (counter, items) = counted_items(3);
    let out: Vec<u64> = items.iter().repeat(3).map(|c| c.id).collect();
    assert_eq!(out, [0u64, 1, 2].repeat(3));
    assert_eq!(counter.get(), 0, "repeat() must never clone payloads");

    // times == 1: streaming, no caching of any kind.
    let (counter, items) = counted_items(3);
    let out: Vec<u64> = items.iter().repeat(1).map(|c| c.id).collect();
    assert_eq!(out, vec![0, 1, 2]);
    assert_eq!(counter.get(), 0);

    // times == 2: the second pass reads the same handles back.
    let (counter, items) = counted_items(3);
    let out: Vec<u64> = items.iter().repeat(2).map(|c| c.id).collect();
    assert_eq!(out, vec![0, 1, 2, 0, 1, 2]);
    assert_eq!(counter.get(), 0);
}
