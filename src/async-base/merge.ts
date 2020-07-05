import { mergeIterators, getIterators } from './merging';

export function merge<T>(
  ...items: Array<AsyncIterable<T> | AsyncIterator<T>>
): AsyncIterable<T> {
  return mergeIterators(undefined, ...getIterators<T>(items));
}
