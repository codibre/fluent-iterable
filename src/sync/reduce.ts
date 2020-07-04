import { getReduce } from '../common/get-reduce';
import { reduceAndMap } from './reduce-and-map';
import { Reducer } from '../types';

export const reduce: <T, R>(
  iterable: Iterable<T>,
  reducer: Reducer<T, R>,
  initial: R,
) => R = getReduce(reduceAndMap);
