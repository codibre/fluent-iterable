# @fluent-iterable/lazy-structures

On-demand, concurrently populated lookup structures for
[@codibre/fluent-iterable](https://www.npmjs.com/package/@codibre/fluent-iterable).
Currently: **LazyMap** (via `toLazyMap`). Planned: `toLazySet` and friends.

## Why

When two async workloads overlap — a producer stream fetched over the network
and a consumer that needs lookups — you can hide most of the producer's
latency: start the consumer immediately and let the producer fill an O(1)
map as items arrive. First items that were already produced are served
**synchronously**, while a not-yet-produced key suspends **only that caller**
until the producer gets there. Time-to-first-item stops being the time to
fetch *everything*.

## Usage

```ts
import '@fluent-iterable/lazy-structures';
import { fluentAsync } from '@codibre/fluent-iterable';

const rows = fluentAsync(dbCursor()).map((row) => enrich(row)); // slow producer

const byId = rows.toLazyMap(
  (row) => row.id, // key selector
  (row) => row.data, // value selector (optional: item stored by default)
);

// lookups may come from anywhere, immediately:
const first = await byId.get('user-1'); // suspends only until 'user-1' arrives
byId.get('user-2'); // -> data | Promise<data|undefined> | undefined
```

`get` returns:

- the stored value **directly** (no promise, no allocation) on a cache hit;
- a promise on a miss while the stream is active — settled when the key is
  inserted, with `undefined` when the stream completes, rejected when it fails;
- `undefined` immediately for keys missing from a completed stream;
- a rejected promise once the producer has failed.

### Lifecycle

```ts
byId.start(); // explicit (idempotent) start; also chainable
byId.start((err) => alert(err)); // onError receives the producer failure
```

- Construction is inert: nothing is pulled until `start()` or the first `get()`.
- Any producer failure is captured: every pending `get` rejects immediately,
  future `get`s reject with the same error, and no rejection is ever floating.
- `dispose()` / `await using` close the underlying iterator (`return()`), so
  cursors and sockets are released deterministically when the consumer bails
  early.

```ts
async function consume() {
  await using byId = fluentAsync(rows()).toLazyMap((r) => r.id);
  return byId.get('user-1');
}
```

## When it fits (and when it does not)

- **Fits**: memory-bounded datasets with high per-item I/O latency — e.g. a
  database cursor joined with a paginated external API.
- **Does not fit**: unbounded/huge streams (the whole producer output is
  cached — there is no backpressure between producer and consumer), and
  in-memory low-latency sources, where the synchronization overhead outweighs
  the latency overlap.

See [issue #100](https://github.com/codibre/fluent-iterable/issues/100) for
the full semantics shared with the Rust sibling crate `fluent-lazy-structures`.
