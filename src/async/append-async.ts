import { AnyIterable } from '../common';
import { concatAsync } from './concat-async';
import { getAppend } from '../common/get-append';

export const appendAsync: <T>(
  iterable: AnyIterable<T>,
  item: T,
) => Iterable<T> = getAppend(concatAsync);
