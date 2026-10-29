# fluent-iterable

[![crates.io](https://img.shields.io/crates/v/fluent-iterable.svg)](https://crates.io/crates/fluent-iterable)
[![docs.rs](https://img.shields.io/docs.rs/fluent-iterable/latest)](https://docs.rs/fluent-iterable)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**The fluent iterator operations `std` forgot — joins, stable grouping, key
dedup, short-circuiting predicates — as one zero-dependency extension trait
over [`std::iter::Iterator`].**

`std` iterators are excellent at `map`, `filter` and `fold`. The moment you
need to *join two collections on a key*, *group preserving first-seen order*,
*deduplicate by projection*, or ask *"are there more than 20 rows?"* without
draining a cursor, you are writing `HashMap` loops again. This crate ships
exactly that residue — the same operation names the
[`@codibre/fluent-iterable`](https://www.npmjs.com/package/@codibre/fluent-iterable)
ecosystem made familiar in JavaScript — on the one mechanism Rust actually
has: an extension trait with a blanket impl over every `Iterator`.

* **No wrapper type.** No `Fluent::new(iter)`, no intermediate object model.
  Import one trait and chain onto iterators you already have.
* **Zero dependencies.** Everything is built from `std` you already compile.
* **Honest laziness.** Adapters stream and stop early; operations whose
  first result is not final until the whole source is read
  (`group_by_stable`, `combine_join`, the sort family) materialize once and
  hand back a solid `Vec`/`HashMap` — same work, same memory, plus
  re-iterability and every `Vec` method for free.
* **Honest typing.** `avg()` returns `Option<f64>`, never `NaN`.

```rust
use fluent_iterable::FluentIter;

let orders = [(1, "keyboard"), (2, "mouse"), (1, "monitor")];
let customers = [(1, "Ada"), (2, "Grace")];

// Inner join — streams the left side, indexes the right one exactly once.
let joined: Vec<_> = orders
    .iter()
    .combine(customers.iter(), |order| order.0, |customer| customer.0)
    .collect();
assert_eq!(joined.len(), 3);

// Stable grouping: buckets in first-seen order, never alphabetical.
let by_customer = orders.iter().group_by_stable(|order| order.0);
assert_eq!(by_customer[0].1, vec![&(1, "keyboard"), &(1, "monitor")]);

// Fold and project in one pass.
let report = orders
    .iter()
    .map(|(_, name)| name.len())
    .reduce_and_map(0usize, |sum, len| sum + len, |sum| format!("{sum} chars ordered"));
assert_eq!(report, "20 chars ordered");
```

## The trait

One import — `use fluent_iterable::FluentIter;` — adds everything below to
every `Iterator`.

### Memory by design

Keeping peak memory low is the point of the library. Every method falls in
one of four profile classes (stated in the tables' *Execution* column):

- **Streaming adapters** (`map`, `filter`, `take`, … and `combine`) hold
  O(1) per item. `combine` additionally indexes the right side once —
  `O(right)` — and yields its first pairs while that index is still
  filling, so `take(k)` can stop before the right side is drained.
- **Lazy dedup** (`distinct`, `distinct_by`) buffers only handles or keys
  seen so far — never payload copies — and items stream through; pass a
  borrowed key (`|item| &item.id`) to `distinct_by` for zero copies end
  to end.
- **Short-circuit guards** (`is_distinct`, `contains`, the cardinality
  checks) do work only until the answer is proven.
- **Resolving terminals** (`combine_join`, `group_by_stable`, the
  `to_map*` family, sorts) materialize the result itself — that is the
  output — with at most one extra input's index alive transiently, never
  all inputs at once.

Joins take `Copy` handles (usually references): pairs and rows *share*
the data instead of copying it, so a fan-out multiplies 16-byte handles
and the payload lives exactly once, in your containers. Rows of `&T`
borrow the inputs — drop the rows and the inputs are free again; if you
need self-contained owned rows, materialize at the call site. The real
OOM frontier for fan-out results is the output size itself: duplicated
join keys multiply rows — that is the answer, not overhead. Prefer
`distinct_by` before a fold, or the lazy `combine` with `take`, when
keys might repeat.

### Joins & grouping

| Method | What it gives you | Execution |
|---|---|---|
| `combine(other, key_left, key_right)` | inner-join rows, yielding while indexing the right side | lazy adapter |
| `combine_join(key)` | merge a stream of row-sets into per-key groups | resolves once |
| `group_by_stable(key)` | buckets keyed by `key`, keys ordered by **first appearance** | resolves once |
| `to_map_by(key, value)` | index into a `HashMap` (last write wins) | resolves once |
| `to_map_chain(key1, key2)` | two-level `HashMap<HashMap<K2, Vec<T>>>` index | resolves once |
| `to_map_chain_reduce(key1, key2, init, reduce)` | two-level index with fold-in aggregation | resolves once |

### Distinctness & membership

| Method | What it gives you | Execution |
|---|---|---|
| `distinct()` | first occurrence of each item | lazy, buffers only seen keys |
| `distinct_by(key)` | first occurrence per projected key | lazy, buffers only seen keys |
| `is_distinct()` / `is_distinct_by(key)` | "any duplicates?" | **short-circuits** on the first repetition |
| `contains(item)` | membership check | short-circuits |

### Fallbacks, repetition & cardinality guards

| Method | What it gives you | Execution |
|---|---|---|
| `when_empty(fallback)` | the source, unless it yields nothing | lazy |
| `repeat(times)` | the sequence, `times` times (streams pass 1, replays a **handles** cache after — payload never copies) | lazy |
| `has_exactly(n)` / `has_less_than(n)` / `has_less_or_exactly(n)` / `has_more_than(n)` / `has_more_or_exactly(n)` | cardinality answers without draining | **stop at `n + 1` items** |

### Sorting, strings & numbers

| Method | What it gives you | Execution |
|---|---|---|
| `sorted()` / `sort_with(cmp)` | stable sort by `Ord` / custom comparator | resolves once |
| `sort_by(key)` / `sort_by_desc(key)` | stable sort by projected key | resolves once |
| `join(sep)` / `join_by(value, sep)` | concatenate `Display`ables / projected values | immediate |
| `avg()` / `avg_by(value)` | mean as `Option<f64>` — `None` on empty | immediate |

## Recipes

**Pagination probe without draining the cursor** — `has_more_than` stops at
`page_size + 1`:

```rust
use fluent_iterable::FluentIter;

let page = 20;
assert!((0..21).has_more_than(page));
assert!(!(0..20).has_more_than(page));
```

**Deduplicate lazily** — `distinct_by` holds one key set, never the items,
and `take` still short-circuits:

```rust
use fluent_iterable::FluentIter;

let events = [("click", 1), ("scroll", 2), ("click", 3)];
let first_per_kind: Vec<(&str, i32)> = events
    .into_iter()
    .distinct_by(|(kind, _)| *kind)
    .take(1)
    .collect();
assert_eq!(first_per_kind, vec![("click", 1)]);
```

**Streaming equi-join** — the right side is indexed on the first pull; the
left side flows, so `take(1)` reads one left row:

```rust
use fluent_iterable::FluentIter;

let users = [(1, "Ada"), (2, "Grace")];
let orders = [(1, "keyboard"), (1, "monitor"), (2, "mouse")];

let pairs: Vec<_> = orders
    .iter()
    .combine(&users, |o| o.0, |u| u.0)
    .take(1)
    .collect();
assert_eq!(pairs.len(), 1);
```

**Two-level index with aggregation** — per customer, per month, total spend:

```rust
use fluent_iterable::FluentIter;

let sales = [("ada", 3, 40.0), ("ada", 3, 10.0), ("grace", 4, 25.0)];
let totals = sales
    .iter()
    .to_map_chain_reduce(|s| s.0, |s| s.1, 0.0, |sum, s| sum + s.2);
assert_eq!(totals["ada"][&3], 50.0);
```

**Empty-source fallback and bounded replay:**

```rust
use fluent_iterable::FluentIter;

let nothing: Vec<i32> = Vec::new();
let values: Vec<i32> = nothing.into_iter().when_empty([1, 2, 3]).collect();
assert_eq!(values, vec![1, 2, 3]);

let replayed: Vec<i32> = [1, 2].into_iter().repeat(3).collect();
assert_eq!(replayed, vec![1, 2, 1, 2, 1, 2]);
```

**Report legibly:**

```rust
use fluent_iterable::FluentIter;

let scores = [7.5, 8.0, 9.5];
assert_eq!(scores.into_iter().avg(), Some(8.333333333333334));
assert_eq!(std::iter::empty::<f64>().avg(), None); // no NaN, ever

let label = scores.iter().join_by(|v| format!("{v:.1}"), " · ");
assert_eq!(label, "7.5 · 8.0 · 9.5");
```

## Design choices that differ from the JS original

* **`avg()` returns `Option<f64>`** — empty input is `None`, not `NaN`.
* **Sorting is stable and typed** — `Ord`/comparators, never JS's string
  coercion; equal items keep input order.
* **`group_by_stable` orders keys by first appearance** — the behavior
  everyone expects from `.group()` and nobody gets from `HashMap`.
* **Join keys are explicit closures** — no implicit identity-key magic.
* **Nested indices go two levels deep** (`to_map_chain*`) with concrete
  types; deeper nesting is a fold of two-level layers.
* **First-wins `distinct_by`** — a chooser/max-occurrences flavor can land
  later without breaking names.
* **Nothing async** — stable Rust has no `AsyncIterator` trait; when the
  language lands generic async iteration, the vocabulary ports straight.
  Emitter/lifecycle ops (`emit`/`catch`/`finally`) are `Result`, `Drop` and
  stream-crate territory in Rust, by design.

## Coming from npm `fluent-iterable`?

`std` already owns most of the surface: `.map`, `.filter`, `.flatMap`,
`.mapNotNull` → `filter_map`, `.first` → `next`/`find`, `.some`/`.every` →
`any`/`all`, `.take`/`.skip`/`.takeWhile`/`.skipWhile`, `.count`,
`.sum`/`.min`/`.max`, `.reduce` → `fold`, `.partition` → `slice::chunks`,
`.concat`/`.append` → `chain`, `.withIndex` → `enumerate`, `.toArray` →
`collect`, `.toSet` → `collect::<HashSet<_>>()`, `.top` → `max_by_key`. The
methods in the tables above cover the rest, one-for-one under the same
names (`.group` → `group_by_stable`, `.combineJoin` → `combine_join`,
`.toMapChainReduce` → `to_map_chain_reduce`, `.hasLessOrExactly` →
`has_less_or_exactly`, `.reduceAndMap` → `reduce_and_map` with the initial
value first, Rust-style).

## Install

```bash
cargo add fluent-iterable
```

Then:

```rust
use fluent_iterable::FluentIter;
```

Edition 2021, MSRV 1.70, MIT licensed, zero dependencies.

## Development

```bash
cargo test                  # unit + integration tests, and every example above
bash scripts/coverage.sh    # writes coverage/lcov.info (bootstraps cargo-llvm-cov)
```

The crate keeps one source file per operation family: `build.rs` splices the
`src/methods/*.rs` fragments into the trait rustc compiles — edit the
fragments, never the generated `src/fluent_iter.rs`. Inside the monorepo the
crate rides the shared `pnpm`/`turbo`/release-it pipeline; see
`RELEASING.md` in the repository for the full release and trusted-publishing
runbook.
