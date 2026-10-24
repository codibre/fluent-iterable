//! Fluent extension trait for [`std::iter::Iterator`] — the Rust port of the
//! [`@codibre/fluent-iterable`](https://www.npmjs.com/package/@codibre/fluent-iterable)
//! vocabulary.
//!
//! JavaScript got a fluent iterator chain protocol that Node's standard
//! library never shipped, so this library ships the *same vocabulary* for
//! Rust on the one mechanism the language actually has: an extension trait
//! with a blanket impl over every [`Iterator`]. No wrapper type, no DSL —
//! chain onto any iterator you already have.
//!
//! ```
//! use fluent_iterable::FluentIter;
//!
//! let rows = [("sa", 10), ("sp", 30), ("sa", 25)];
//! let by_state = rows.into_iter().group_by_stable(|(s, _)| *s);
//! assert_eq!(by_state[0].1, vec![("sa", 10), ("sa", 25)]);
//!
//! let report = rows
//!     .into_iter()
//!     .map(|(_, v)| v)
//!     .join_by(|v| format!("{v:>4}"), " | ");
//! assert_eq!(report, "  10 |   30 |   25");
//! ```
//!
//! # npm ⇄ Rust map
//!
//! Only the operations that `std` lacks live here. Everything else already
//! has a native spelling — using it keeps code idiomatic:
//!
//! | npm fluent-iterable            | Rust                                        |
//! |--------------------------------|---------------------------------------------|
//! | `.map/.filter`                 | [`Iterator::map`] / [`Iterator::filter`]     |
//! | `.flatMap` / `.flatten`        | [`Iterator::flat_map`]                       |
//! | `.mapNotNull` / pick-maps      | [`Iterator::filter_map`]                     |
//! | `.first()`                     | [`Iterator::next`] / [`Iterator::find`]      |
//! | `.last()`                      | `.next_back()` (double-ended) or fold        |
//! | `.some(p)` / `.every(p)`       | [`Iterator::any`] / [`Iterator::all`]        |
//! | `.take/.skip/.takeWhile/.skipWhile` | same names on [`Iterator`]              |
//! | `.count()`                     | [`Iterator::count`]                          |
//! | `.sum()` / `.min()` / `.max()` | [`Iterator::sum`] / [`Iterator::min`] / [`Iterator::max`] |
//! | `.reduce(r, i)`                | [`Iterator::fold`]                           |
//! | `.partition(n)`                | [`slice::chunks`](std::slice::chunks)        |
//! | `.concat/.append/.prepend`     | [`Iterator::chain`]                          |
//! | `.withIndex()`                 | [`Iterator::enumerate`]                      |
//! | `.toArray()`                   | [`Iterator::collect`]                        |
//! | `.toSet()`                     | `.collect::<std::collections::HashSet<_>>()` |
//! | `.group(keyFn)`                | [`FluentIter::group_by_stable`]              |
//! | `.combine(other, ka, kb)`      | [`FluentIter::combine`]                      |
//! | `.combineJoin(baseKey)`        | [`FluentIter::combine_join`]                 |
//! | `.distinct(keyFn?)`            | [`FluentIter::distinct_by`] / [`FluentIter::distinct`] |
//! | `.isDistinct(keyFn?)`          | [`FluentIter::is_distinct_by`] / [`FluentIter::is_distinct`] |
//! | `.toMap(k, v)`                 | [`FluentIter::to_map_by`]                    |
//! | `.toMapChain(k1, k2)`          | [`FluentIter::to_map_chain`] (depth 2)       |
//! | `.toMapChainReduce(…)`         | [`FluentIter::to_map_chain_reduce`] (depth 2)|
//! | `.join(sep, mapFn?)`           | [`FluentIter::join`] / [`FluentIter::join_by`] |
//! | `.avg(mapFn?)`                 | [`FluentIter::avg`] / [`FluentIter::avg_by`] |
//! | `.sort(cmp?)`                  | [`FluentIter::sorted`] / [`FluentIter::sort_with`] |
//! | `.sortBy(key…)`                | [`FluentIter::sort_by`] / [`FluentIter::sort_by_desc`] |
//! | `.hasExactly(n)`               | [`FluentIter::has_exactly`]                  |
//! | `.hasLessThan(n)`              | [`FluentIter::has_less_than`]                |
//! | `.hasLessOrExactly(n)`         | [`FluentIter::has_less_or_exactly`]          |
//! | `.hasMoreThan(n)`              | [`FluentIter::has_more_than`]                |
//! | `.hasMoreOrExactly(n)`         | [`FluentIter::has_more_or_exactly`]          |
//! | `.reduceAndMap(r, i, m)`       | [`FluentIter::reduce_and_map`]               |
//! | `.contains(item)`              | [`FluentIter::contains`]                     |
//! | `.whenEmpty(fb)`               | [`FluentIter::when_empty`]                   |
//! | `.repeat(n)`                   | [`FluentIter::repeat`]                       |
//! | `.top(proj, cmp)`              | `.max_by_key` / `.max_by`                    |
//!
//! # What is deliberately *not* ported (and why)
//!
//! | npm surface                                  | reason |
//! |----------------------------------------------|--------|
//! | every `*Async` operation, `flatMerge`        | stable Rust has no `AsyncIterator` trait; generic async iteration is unexpressible. Revisit when the language lands it. |
//! | `emit` / `catch` / `finally` / `execute` / `waitAll` | JS emitter/lifecycle surface. `Result`, `Drop` and dedicated stream crates own this in Rust. |
//! | `toObject` / `toObjectChain*` / `unwind`     | dynamic-property idioms; struct field selection via `flat_map` is the Rust answer. |
//! | `branch`                                     | needs fan-out buffering (`tee`); possible v2. |
//! | `distinct(key, choose, maxOccurrences)` extras | v1 keeps first-wins; a chooser/max-occurrences flavor can land later without breaking names. |
//! | `toMapChain` dynamic key depth               | JS nests to an arbitrary number of key functions; Rust fixes the concrete nested type at **depth 2**. Deeper nesting is a fold of depth-2 layers. |
//! | `avg()` returning `NaN` on empty             | Rust says it in the type: `Option<f64>`, `None` on empty. |
//! | `sort()` default comparator (stringified JS ordering) | Rust uses `Ord` ([`FluentIter::sorted`]) — numeric/lexicographic by the type's own ordering, never string coercion. |
//! | `combine` default-identity keys              | keys are explicit closures in Rust. |
//! | `whenEmpty` with a differently-typed fallback | the fallback must yield the same `Item` type; map it first. |
//!
//! # Laziness
//!
//! Adapters ([`FluentIter::distinct`], [`FluentIter::when_empty`],
//! [`FluentIter::repeat`]) stream and short-circuit like `std` adapters.
//! Terminals that need the whole sequence (`group_by_stable`, `combine`,
//! `sort*`, `to_map*`) return owned `Vec`/`HashMap` directly — the JS side
//! materializes at these points anyway, and materializing keeps the order
//! semantics exact and obvious.

//!
//! # Project layout
//!
//! The trait definition is assembled by `build.rs` from per-family fragments:
//!
//! * `src/methods/00_head.rs` — trait docs and signature.
//! * `src/methods/<family>.rs` — the default methods, one module file per
//!   operation family (rustc allows a trait body in a single file only, so
//!   `build.rs` splices the fragments and `lib.rs` includes the result).
//! * `src/ops/` — the streaming adapter structs.
//! * `src/tests_src/` — the unit tests, per family, spliced into the
//!   crate's test module.
//! * `tests/chaining.rs` — end-to-end chains through the public API.
//!
//! Edit the fragments; never the generated file.

use std::cmp::Ordering;
use std::collections::{HashMap, HashSet};
use std::fmt::Display;
use std::hash::Hash;

pub mod ops;

pub use ops::combining::Combine;
pub use ops::distinct::{Distinct, DistinctBy};
use ops::fallback::WhenEmptyPhase;
pub use ops::fallback::{Repeat, WhenEmpty};

include!("fluent_iter.rs");

impl<I: Iterator> FluentIter for I {}

#[cfg(test)]
mod tests {
    use super::*;

    include!("tests_src/support.rs");

    include!("tests_src/grouping.rs");
    include!("tests_src/combining.rs");
    include!("tests_src/distinct.rs");
    include!("tests_src/fallback.rs");
    include!("tests_src/sorting.rs");
    include!("tests_src/statistics.rs");
    include!("tests_src/strings.rs");
    include!("tests_src/cardinality.rs");
    include!("tests_src/folds.rs");
    include!("tests_src/integration.rs");
}
