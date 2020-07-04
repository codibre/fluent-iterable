import { AnyIterable } from '../common';
import { getTake } from '../common/get-take';
import { takeWhileAsync } from './take-while-async';

export const takeAsync: <T>(
  iterable: AnyIterable<T>,
  n: number,
) => AsyncIterable<T> = getTake(takeWhileAsync);
