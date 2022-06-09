import { AnyMapper } from '../types-internal';
import { prepare } from '../types-internal/prepare';
import { identity } from '../utils';
import { BasicIngredients } from './ingredients';

export function flattenRecipe({ iterateAll, map }: BasicIngredients) {
  return function <T, R>(
    this: Iterable<T>,
    baseMapper: AnyMapper<T> = identity,
  ): Iterable<R> {
    const mapper = prepare(baseMapper);
    return iterateAll(map.call(this, mapper));
  };
}
