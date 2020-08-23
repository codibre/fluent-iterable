import { AnyMapper } from '../types-internal';
import { identity } from '../utils';
import { BasicIngredients } from './ingredients';

export function flattenRecipe({ iterateAll, map }: BasicIngredients) {
  return function <T, R>(
    this: Iterable<T>,
    mapper: AnyMapper<T> = identity,
  ): Iterable<R> {
    return iterateAll(map.call(this, mapper));
  };
}
