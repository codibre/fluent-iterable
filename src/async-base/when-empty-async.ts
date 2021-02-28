import { executeAsync } from '../async/execute-async';

export async function* whenEmptyAsync<T, R>(
  this: AsyncIterable<T>,
  fallbackIterable: AsyncIterable<R>,
): AsyncIterable<T | R> {
  let fallback = true;
  yield* executeAsync.call(this, () => (fallback = false));

  if (fallback) {
    yield* fallbackIterable;
  }
}
