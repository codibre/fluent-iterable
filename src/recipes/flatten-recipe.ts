import { AnyMapper } from '../types-internal';
import { identity } from '../utils';

export function flattenRecipe(iterateAll: Function, map: Function) {
  return function <T, R>(
    this: Iterable<T>,
    mapper: AnyMapper<T> = identity,
  ): Iterable<R> {
    return iterateAll(map.call(this, mapper));
  };
}
