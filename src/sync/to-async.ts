export async function* toAsync<T>(iterable: Iterable<T>): AsyncIterable<T> {
  yield* iterable;
}
