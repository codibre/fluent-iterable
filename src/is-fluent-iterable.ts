import { FluentIterable } from '.';
import { fluentSymbol } from './types-internal';

/**
 * Return true when the informed value is an fluent iterable, and false otherwise
 * @param value the value to be analyzed
 * @returns The return is also a type guard, ie, inside an if with that function, the value will be considered an fluent iterable
 */
export function isFluentIterable<T>(
  value: unknown,
): value is FluentIterable<T> {
  return !!(value && (value as any).fluent === fluentSymbol);
}
