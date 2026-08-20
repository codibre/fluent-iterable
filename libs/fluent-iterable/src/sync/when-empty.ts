import { execute } from './execute';

export function* whenEmpty<T, R>(
  this: Iterable<T>,
  fallbackIterable: Iterable<R>,
): Iterable<T | R> {
  let fallback = true;
  yield* execute.call(this, () => (fallback = false)) as Iterable<T>;

  if (fallback) {
    yield* fallbackIterable;
  }
}
