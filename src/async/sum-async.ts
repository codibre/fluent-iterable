import { AnyIterable } from '../common/any-iterable';
import { AsyncMapper } from '../types';
import { getSum } from '../common/get-sum';
import { reduceAsync } from './reduce-async';

export const sumAsync: <T>(
  iterable: AnyIterable<T>,
  mapper?: AsyncMapper<T, number>,
) => Promise<number> = getSum(reduceAsync);
