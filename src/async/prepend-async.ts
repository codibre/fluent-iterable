import { getPrepend } from '../common/get-prepend';
import { concatAsync } from './concat-async';
import { AnyIterable } from '../common';

export const prependAsync: <T>(
  iterable: AnyIterable<T>,
  item: T,
) => AsyncIterable<T> = getPrepend(concatAsync);
