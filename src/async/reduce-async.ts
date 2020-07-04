import { getReduce } from '../common/get-reduce';
import { reduceAndMapAsync } from './reduce-and-map-async';
import { AsyncReducer } from '../types';
import { AnyIterable } from '../common/any-iterable';

export const reduceAsync: <T, R>(
  iterable: AnyIterable<T>,
  reducer: AsyncReducer<T, R>,
  initial: R,
) => Promise<R> = getReduce(reduceAndMapAsync);
