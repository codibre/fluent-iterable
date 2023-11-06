import { identity } from '.';
import fluent from './fluent';
import { FluentIterable } from './types';

function internalFluentFor<T>(
  start: T,
  condition: (value: T) => boolean,
  increment: (value: T) => T,
): Iterable<T> {
  let current = start;
  return {
    [Symbol.iterator]: () => ({
      next() {
        const done = !condition(current);
        const value = current;
        current = increment(current);
        return {
          value,
          done,
        };
      },
    }),
  };
}

/**
 * Generates a FluentIterable that yields a for-like increment
 * @param start The starting number
 * @param condition The keep going condition
 * @param increment The increment. Default 1
 */
export function fluentFor<T>(
  start: T,
  condition: (value: T) => boolean,
  increment = identity,
): FluentIterable<T> {
  return fluent(internalFluentFor(start, condition, increment));
}
