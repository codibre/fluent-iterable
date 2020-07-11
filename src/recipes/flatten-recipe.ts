import { AnyMapper } from '../types-internal';

export function flattenRecipe(iterateAll: Function, map: Function) {
  return function <T, R>(
    this: Iterable<T>,
    mapper: AnyMapper<T> = (t) => t as unknown,
  ): Iterable<R> {
    return iterateAll(map.call(this, mapper));
  };
}
