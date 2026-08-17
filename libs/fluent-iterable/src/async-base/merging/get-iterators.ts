export function getIterators<T>(items: AsyncIterable<T>[]): AsyncIterator<T>[] {
  return items.map((x) => x[Symbol.asyncIterator]());
}
