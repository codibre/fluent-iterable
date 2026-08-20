import { AnyIterable } from 'augmentative-iterable';

/**
 * Return true when the informed value is any kind of iterable, and false otherwise
 * @param value the value to be analyzed
 * @returns The return is also a type guard, ie, inside an if with that function, the value will be considered an iterable | async iterable
 */
export function isAnyIterable<T>(value: unknown): value is AnyIterable<T> {
  return !!(
    value &&
    (typeof (value as any)[Symbol.iterator] === 'function' ||
      typeof (value as any)[Symbol.asyncIterator] === 'function')
  );
}
