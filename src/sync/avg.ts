import { Mapper } from '../types';
import { reduceAndMap } from './reduce-and-map';
import { getAvg } from '../common/get-avg';

export const avg: <T>(
  iterable: Iterable<T>,
  mapper?: Mapper<T, number>,
) => number = getAvg(reduceAndMap, (mapper) => (current, next) => {
  current.sum += mapper(next);
  current.count++;
  return current;
});
