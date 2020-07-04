export function* append<T>(iterable: Iterable<T>, item: T): Iterable<T> {
  yield* iterable;
  yield item;
}
