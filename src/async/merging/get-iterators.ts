export function getIterators<T>(
  items: (AsyncIterable<T> | AsyncIterator<T>)[],
): AsyncIterator<T>[] {
  return items.map((x) =>
    x.hasOwnProperty(Symbol.asyncIterator)
      ? (x as AsyncIterable<T>)[Symbol.asyncIterator]()
      : (x as AsyncIterator<T>),
  );
}
