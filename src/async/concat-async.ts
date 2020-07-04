import { getConcat } from '../common/get-concat';
import { flattenAsync } from './flatten-async';
import { AnyIterable } from '../common';

export const concatAsync: <T>(
  ...iterables: Array<AnyIterable<T>>
) => AsyncIterable<T> = getConcat(flattenAsync);
