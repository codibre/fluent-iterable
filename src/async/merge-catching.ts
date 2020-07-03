import { ErrorCallback, mergeIterators } from '../mergeIterators';
import { getIterators } from './get-iterators';

export function mergeCatching<T>(
  callback: ErrorCallback,
  ...items: Array<AsyncIterable<T> | AsyncIterator<T>>
): AsyncIterable<T> {
  return mergeIterators(callback, ...getIterators<T>(items));
}
