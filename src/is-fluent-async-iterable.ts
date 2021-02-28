import { FluentAsyncIterable } from '.';
import { fluentSymbolAsync } from './types-internal';

/**
 * Return true when the informed value is an fluent async iterable, and false otherwise
 * @param value the value to be analyzed
 * @returns The return is also a type guard, ie, inside an if with that function, the value will be considered an fluent async iterable
 */
export function isFluentAsyncIterable<T>(
  value: unknown,
): value is FluentAsyncIterable<T> {
  return !!(value && (value as any).fluent === fluentSymbolAsync);
}
