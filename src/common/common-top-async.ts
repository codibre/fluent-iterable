import { AsyncMapper, Comparer } from '../types';
import { ReduceAndMapAsync } from './reduce-and-map-async-type';
import { FindStrut } from './find-strut';

export function commonTopAsync<T, R, It extends Iterable<T> | AsyncIterable<T>>(
  iterable: It,
  mapper: AsyncMapper<T, R>,
  comparer: Comparer<R>,
  reduceAndMapAsync: ReduceAndMapAsync<T, FindStrut<T, R>, T | undefined, It>,
): Promise<T | undefined> {
  return reduceAndMapAsync(
    iterable,
    async (current, next) => {
      const value = await mapper(next);
      return !current.found ||
        (current.value && comparer(value, current.value) > 0)
        ? { value, item: next, found: true }
        : current;
    },
    { value: undefined, item: undefined, found: false },
    async (acc) => acc.item,
  );
}
