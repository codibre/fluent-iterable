import { identity, FluentAsyncIterable, fluentAsync } from '.';

async function* internalFluentForAsync<T>(
  start: T | Promise<T>,
  condition: (value: T) => boolean | Promise<boolean>,
  increment: (value: T) => T | Promise<T>,
): AsyncIterable<T> {
  for (
    let current = await start;
    await condition(current);
    current = await increment(current)
  ) {
    yield current;
  }
}

/**
 * Generates a FluentIterable that yields a for-like increment
 * @param start The starting number
 * @param condition The keep going condition
 * @param increment The increment. Default 1
 */
export function fluentForAsync<T>(
  start: T | Promise<T>,
  condition: (value: T) => boolean | Promise<boolean>,
  increment: (value: T) => T | Promise<T> = identity,
): FluentAsyncIterable<T> {
  return fluentAsync(internalFluentForAsync(start, condition, increment));
}
