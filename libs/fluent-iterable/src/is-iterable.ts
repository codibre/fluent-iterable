/**
 * Return true when the informed value is an iterable, and false otherwise
 * @param value the value to be analyzed
 * @returns The return is also a type guard, ie, inside an if with that function, the value will be considered an iterable
 */
export function isIterable<T>(value: unknown): value is Iterable<T> {
  return !!(value && typeof (value as any)[Symbol.iterator] === 'function');
}
