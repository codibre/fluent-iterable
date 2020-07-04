import { AsyncMapper } from '../types';
import { reduceAndMapAsync } from './reduce-and-map-async';
import { getAvg, AvgCalc } from '../common/get-avg';

export const avgAsync: <T>(
  iterable: Iterable<T>,
  mapper?: AsyncMapper<T, number>,
) => Promise<number> = getAvg(
  reduceAndMapAsync,
  <T>(mapper: Function) => async (current: AvgCalc, next: T) => {
    current.sum += await mapper(next);
    current.count++;
    return current;
  },
);
