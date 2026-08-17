/**
 * Return true when the informed value is an async iterable, and false otherwise
 * @param value the value to be analyzed
 * @returns The return is also a type guard, ie, inside an if with that function, the value will be considered an async iterable
 */
export function isAsyncIterable<T>(value: unknown): value is AsyncIterable<T> {
  return !!(
    value && typeof (value as any)[Symbol.asyncIterator] === 'function'
  );
}
