import { AnyMapper } from '../types-internal';

export function flattenRecipe(iterateAll: Function, map: Function) {
  return <T, R>(
    iterable: Iterable<T>,
    mapper: AnyMapper<T> = (t) => t as unknown,
  ): Iterable<R> => iterateAll(map(iterable, mapper));
}
