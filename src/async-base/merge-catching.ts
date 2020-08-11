import { mergeIterators, getIterators } from './merging';
import { ErrorCallback } from '../types-base';

export function mergeCatching<T, R>(
  this: AsyncIterable<T>,
  callback: ErrorCallback,
  ...items: Array<AsyncIterable<R>>
): AsyncIterable<T | R> {
  return mergeIterators(
    callback,
    ...getIterators<T | R>([this, ...items]),
  );
}
