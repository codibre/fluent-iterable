export async function* concatAsync<T>(
  ...iterables: Array<AsyncIterable<T>>
): AsyncIterable<T> {
  for (const iterable of iterables) {
    yield* iterable;
  }
}
