import { mergeIterators, getIterators } from './merging';

export function merge<T, R>(
  this: AsyncIterable<T>,
  ...items: Array<AsyncIterable<R>>
): AsyncIterable<T | R> {
  return mergeIterators(
    undefined,
    ...getIterators<T | R>([this, ...items]),
  );
}
