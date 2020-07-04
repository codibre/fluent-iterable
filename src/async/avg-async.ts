import { AnyIterable } from '../common/any-iterable';
import { AsyncMapper } from '../types';
import { identity } from '../utils';
import { reduceAndMapAsync } from './reduce-and-map-async';

export function avgAsync<T>(
  iterable: AnyIterable<T>,
  mapper: AsyncMapper<T, number> = identity as AsyncMapper<T, number>,
): Promise<number> {
  return reduceAndMapAsync(
    iterable,
    async (current, next) => ({
      avg:
        (current.avg * current.count + (await mapper(next))) /
        (current.count + 1),
      count: current.count + 1,
    }),
    { avg: 0, count: 0 },
    (acc) => acc.avg,
  );
}
