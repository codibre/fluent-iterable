# fluent-iterable (Rust)

> The [fluent-iterable](https://github.com/codibre/fluent-iterable)
> vocabulary for Rust — an extension trait over `std::iter::Iterator`,
> published on crates.io as [`fluent-iterable`].

JavaScript needed fluent iterator chains, and this monorepo shipped them.
Rust's `std` already owns most of that surface (`map`, `filter`,
`flat_map`, `any`, `fold`, …) — but not the parts with real algorithmic
content: stable grouping, equi-joins, distinctness checks, cardinality
short-circuits, nested indices. This crate ports exactly that residue, in
the same operation names, as one extension trait:

```rust
use fluent_iterable::FluentIter;

let orders = [(1, 100), (2, 200), (1, 50)];
let customers = [(1, "Ada"), (2, "Grace")];

// inner join, like .combine(other, keySelf, keyOther) — lazy: the left
// side streams, resolve with collect()
let lines: Vec<(&i32, &(i32, &str))> = orders
    .iter()
    .combine(customers.iter(), |(o, _)| *o, |(id, _)| *id)
    .collect();

// stable grouping, like .group(keyFn) — resolves to Vec (the pass is
// inherently full: any item can extend an earlier group)
let by_customer = orders.iter().group_by_stable(|(c, _)| *c);

// fold + project, like .reduceAndMap(reducer, initial, mapFn)
let report = orders
    .iter()
    .map(|(_, v)| *v)
    .reduce_and_map(0, |acc, v| acc + v, |sum| format!("total {sum}"));
assert_eq!(report, "total 350");
```

No wrapper type, no runtime dependencies, nothing to learn beyond your
iterators: `use fluent_iterable::FluentIter;` and chain. Laziness is
applied where it pays: `distinct`/`distinct_by`/`combine` are streaming
adapters that short-circuit under `take(k)`; operations whose first result
is not final until the whole source is read (`group_by_stable`,
`combine_join`, the sort family) resolve to a solid `Vec` — same work, same
memory, plus re-iterability and every `Vec` method for free.

## npm ⇄ Rust map

Operations this crate provides (npm name → Rust method):

| npm fluent-iterable          | Rust                                            |
|------------------------------|-------------------------------------------------|
| `.group(keyFn)`              | `group_by_stable` (resolves to `Vec`; the pass is inherently full) |
| `.combine(other, ka, kb)`    | `combine` (lazy; left streams)                  |
| `.combineJoin(baseKey)`      | `combine_join` (resolves to `Vec`)                  |
| `.distinct()`                | `distinct` (lazy adapter)                       |
| `.distinct(keyFn)`           | `distinct_by` (lazy adapter)                    |
| `.isDistinct()`              | `is_distinct` (short-circuits)                  |
| `.isDistinct(keyFn)`         | `is_distinct_by` (short-circuits)               |
| `.toMap(k, v)`               | `to_map_by`                                     |
| `.toMapChain(k1, k2)`        | `to_map_chain` (depth 2)                        |
| `.toMapChainReduce(…)`       | `to_map_chain_reduce` (depth 2)                 |
| `.join(sep)`                 | `join`                                          |
| `.join(sep, mapFn)`          | `join_by`                                       |
| `.avg()` / `.avg(mapFn)`     | `avg` / `avg_by` (`Option<f64>`, `None` empty)  |
| `.sort(cmp?)`                | `sorted` / `sort_with` (stable, resolves to `Vec`) |
| `.sortBy(key)` / desc        | `sort_by` / `sort_by_desc` (stable, resolves to `Vec`) |
| `.hasExactly(n)`             | `has_exactly`                                   |
| `.hasLessThan(n)`            | `has_less_than`                                 |
| `.hasLessOrExactly(n)`       | `has_less_or_exactly`                           |
| `.hasMoreThan(n)`            | `has_more_than`                                 |
| `.hasMoreOrExactly(n)`       | `has_more_or_exactly`                           |
| `.reduceAndMap(r, i, m)`     | `reduce_and_map` (init first, Rust-style)       |
| `.contains(item)`            | `contains`                                      |
| `.whenEmpty(fb)`             | `when_empty` (lazy adapter)                     |
| `.repeat(n)`                 | `repeat` (finite cycle, lazy adapter)           |

Operations you do **not** need here — `std` already has them:
`map`, `filter`, `filter_map`, `flat_map`/`flatten`, `take`, `skip`,
`take_while`, `skip_while`, `count`, `any`/`all`, `sum`, `min`, `max`,
`fold` (reduce), `chain` (concat/append), `enumerate` (withIndex),
`collect` (toArray), `slice::chunks` (partition), `max_by_key` (top).

## What is deliberately not ported

| npm surface | why |
|---|---|
| every `*Async` operation, `flatMerge` | stable Rust has no `AsyncIterator` trait; revisit when the language lands it. |
| `emit` / `catch` / `finally` / `execute` / `waitAll` | JS emitter/lifecycle surface; `Result`, `Drop` and stream crates own this in Rust. |
| `toObject` / `toObjectChain*` / `unwind` | dynamic-property idioms; struct selection via `flat_map` is the Rust answer. |
| `branch` | needs fan-out buffering (`tee`); candidate for v2. |
| `distinct(key, choose, maxOcurrences)` extras | v1 is first-wins; a chooser/max-occurrences flavor can land later. |
| `toMapChain` arbitrary key depth | Rust fixes the concrete nested type at depth 2; deeper nesting folds layers. |

Intentional semantics upgrades are marked in the [rustdoc](https://docs.rs/fluent-iterable)
(`avg` returning `Option<f64>` instead of `NaN`, stable sorts by `Ord`
instead of JS string coercion, explicit initial value for
`to_map_chain_reduce`).

## Development (inside this monorepo)

This directory is both a cargo package and a pnpm workspace member, so the
usual root commands drive it:

```sh
pnpm install                                  # registers the member
pnpm --filter fluent-iterable-rs test         # cargo test
pnpm --filter fluent-iterable-rs lint         # cargo fmt --check + clippy -D warnings
turbo run test --filter=fluent-iterable-rs    # via turbo, with caching
cargo test                                    # or plain cargo, inside this dir
```

Coverage locally (not wired into the turbo `test:coverage` task on purpose —
CI runners have no `cargo-llvm-cov`):

```sh
cargo install cargo-llvm-cov
cargo llvm-cov --all-targets --lcov --output-path lcov.info
```

## Releasing

Publishing is **manifest-driven**: the version in `Cargo.toml` merged to
`master` *is* the release request. The `publish.yaml` pipeline compares it
against crates.io after each merge — higher publishes (+ tag
`fluent-iterable-rs@<version>`), equal is a silent no-op, lower fails the
run. So a release is just a PR:

```sh
pnpm --filter fluent-iterable-rs version:set 0.0.6   # syncs Cargo.toml + package.json
pnpm --filter fluent-iterable-rs run publish:check   # what CI would do, read-only
pnpm --filter fluent-iterable-rs run publish:dry     # + cargo publish --dry-run
```

Publishing uses **trusted publishing (OIDC)**: the workflow exchanges its
GitHub identity for a 30-minute crates.io token — no API token stored
anywhere. One-time setup (crate owner, on crates.io): the crate's
**Settings → Trusted Publishing → Add (GitHub)** with owner `codibre`,
repository `fluent-iterable`, workflow filename `publish.yaml`, environment
left empty. Manual escape hatch, exactly equivalent: `cargo publish` from
this directory (needs `cargo login` locally) — `package.json` exists only
to bridge pnpm/turbo; the crate has zero npm coupling.

[`fluent-iterable`]: https://crates.io/crates/fluent-iterable
