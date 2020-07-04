import { Mapper } from '../types';
import { reduceAndMap } from './reduce-and-map';
import { getAvg, AvgCalc } from '../common/get-avg';

export const avg: <T>(
  iterable: Iterable<T>,
  mapper?: Mapper<T, number>,
) => number = getAvg(
  reduceAndMap,
  <T>(mapper: Function) => (current: AvgCalc, next: T) => {
    current.sum += mapper(next);
    current.count++;
    return current;
  },
);
