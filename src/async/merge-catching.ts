import { ErrorCallback } from './merging/merge-types';
import { mergeIterators, getIterators } from './merging';

export function mergeCatching<T>(
  callback: ErrorCallback,
  ...items: Array<AsyncIterable<T> | AsyncIterator<T>>
): AsyncIterable<T> {
  return mergeIterators(callback, ...getIterators<T>(items));
}
