import { Mapper } from '../types';
import { identity } from '../utils';
import { reduceAndMap } from './reduce-and-map';

export function avg<T>(
  iterable: Iterable<T>,
  mapper: Mapper<T, number> = identity as Mapper<T, number>,
): number {
  return reduceAndMap(
    iterable,
    (current, next) => ({
      avg: (current.avg * current.count + mapper(next)) / (current.count + 1),
      count: current.count + 1,
    }),
    { avg: 0, count: 0 },
    (acc) => acc.avg,
  );
}
