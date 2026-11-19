# fluent-lazy-structures

On-demand, concurrently populated lookup structures for async streams:
`LazyMap`, an O(1) map filled by a `futures::Stream` producer that runs
concurrently with your consumer — the Rust sibling of the
[`@fluent-iterable/lazy-structures`](../fluent-iterable-lazy-structures/README.md)
TypeScript plugin. Built on the same contract as
[issue #100](https://github.com/codibre/fluent-iterable/issues/100).

## Why

Fetching rows from a database cursor, or pages from an external API, is one
long chain of I/O latencies. A `LazyMap` starts that producer in a background
tokio task the moment you ask for anything (or eagerly with `start()`), and
then serves lookups as the data lands:

- a key the producer already emitted is served immediately;
- a key not emitted yet suspends **only that caller** until it arrives;
- a key missing from a completed stream resolves to `None`;
- a failed producer wakes every waiter with the captured error (sticky),
  while data produced before the failure stays readable;
- dropping the map aborts the background task, so a consumer that bails out
  never leaves the producer fetching rows nobody will read.

**When to use it:** memory-bounded datasets with high per-item latency (e.g.
a DB cursor joined against a paginated external API). **When not to:**
unbounded streams (everything is cached; there is no producer/consumer
backpressure) and low-latency in-memory sources, where the synchronization
overhead outweighs the latency overlap.

## Usage

```rust
use fluent_lazy_structures::LazyStructuresStreamExt;

let map = orders
    .stream() // some futures::Stream<Order> backed by slow I/O
    .to_lazy_map(|order| order.id, |order| order.total);

map.start(); // optional; the first get() starts it implicitly

let total = map.get(&42).await?; // Some(Arc<...>) when produced, None if the
                                 // stream completed without key 42
```

Fallible producers (`TryStream`) flow their errors into `get`'s error
channel via `TryLazyStructuresStreamExt`. Both extension traits define
`to_lazy_map`; import one at a time (or call it qualified) to avoid method
ambiguity.

## Development

The `package.json` here is a workspace bridge only (this crate is published
to crates.io as `fluent-lazy-structures`, never to npm):

```sh
pnpm --filter fluent-lazy-structures-rs build   # cargo build
pnpm --filter fluent-lazy-structures-rs test    # cargo test
pnpm --filter fluent-lazy-structures-rs lint    # fmt --check + clippy -D warnings
```

## License

MIT
