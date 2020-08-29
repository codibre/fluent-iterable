import { AsyncMapper } from '../types';
import { identity } from '../utils';
import { AnyIterable } from 'augmentative-iterable';
import { ReduceIngredient } from './ingredients';

export function sumRecipe(reduce: ReduceIngredient) {
  return function <T>(
    this: AnyIterable<T>,
    mapper: AsyncMapper<T, number> = identity as AsyncMapper<T, number>,
  ) {
    return reduce.call(
      this,
      (current: any, next: any) => current + mapper(next),
      0,
    );
  };
}
