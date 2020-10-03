import { AsyncMapper } from '../types';
import { identity } from '../utils';
import { AnyIterable } from 'augmentative-iterable';
import { ReduceIngredient } from './ingredients';
import { AnyMapper } from '../types-internal';
import { prepare } from '../types-internal/prepare';

export function sumRecipe(reduce: ReduceIngredient) {
  return function <T>(
    this: AnyIterable<T>,
    mapper: AnyMapper<T> = identity as AsyncMapper<T, number>,
  ) {
    const prepared = prepare(mapper);
    return reduce.call(
      this,
      (current: any, next: any) => current + prepared(next),
      0,
    );
  };
}
