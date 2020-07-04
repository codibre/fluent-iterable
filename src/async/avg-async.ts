import { AsyncMapper } from '../types';
import { reduceAndMapAsync } from './reduce-and-map-async';
import { getAvg } from '../common/get-avg';

export const avgAsync: <T>(
  iterable: Iterable<T>,
  mapper?: AsyncMapper<T, number>,
) => Promise<number> = getAvg(
  reduceAndMapAsync,
  (mapper) => async (current, next) => {
    current.sum += await mapper(next);
    current.count++;
    return current;
  },
);
