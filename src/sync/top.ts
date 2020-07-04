import { Comparer, Mapper } from '../types';
import { getTop } from '../common';
import { reduceAndMap } from './reduce-and-map';

export const top: <T, R>(
  iterable: Iterable<T>,
  mapper: Mapper<T, R>,
  comparer: Comparer<R>,
) => T | undefined = getTop(reduceAndMap);
