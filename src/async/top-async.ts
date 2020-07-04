import { AnyIterable } from '../common/any-iterable';
import { AsyncMapper, Comparer } from '../types';
import { getTop } from '../common';
import { reduceAndMapAsync } from './reduce-and-map-async';

export const topAsync: <T, R>(
  iterable: AnyIterable<T>,
  mapper: AsyncMapper<T, R>,
  comparer: Comparer<R>,
) => Promise<T | undefined> = getTop(reduceAndMapAsync);
