import { LazyMap } from './lazy-map';

/**
 * Creates a {@link LazyMap} fed by this async iterable.
 *
 * The source is not consumed yet: nothing is pulled until the returned map is
 * started (explicitly via `start()`, or implicitly by the first `get`). This
 * lets a consumer begin issuing lookups immediately while the producer stream
 * is fetched concurrently, hiding per-item network latency behind the first
 * hits.
 *
 * @param keySelector maps a produced item to its lookup key.
 * @param valueSelector maps a produced item to the stored value; when
 * omitted, the item itself is stored.
 */
export function toLazyMap<T, K, V = T>(
  this: AsyncIterable<T>,
  keySelector: (item: T) => K,
  valueSelector?: (item: T) => V,
): LazyMap<K, V, T> {
  return new LazyMap(this, keySelector, valueSelector);
}
