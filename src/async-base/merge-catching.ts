import { mergeIterators, getIterators } from './merging';
import { ErrorCallback } from '../types';

export function mergeCatching<T>(
  iterable: AsyncIterable<T>,
  callback: ErrorCallback,
  ...items: Array<AsyncIterable<T> | AsyncIterator<T>>
): AsyncIterable<T> {
  return mergeIterators(
    callback,
    ...getIterators<T>([iterable, ...items]),
  );
}
