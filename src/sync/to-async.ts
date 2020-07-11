export async function* toAsync<T>(this: Iterable<T>): AsyncIterable<T> {
  yield* this;
}
