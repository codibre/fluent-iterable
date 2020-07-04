export function* prepend<T>(iterable: Iterable<T>, item: T): Iterable<T> {
  yield item;
  yield* iterable;
}
