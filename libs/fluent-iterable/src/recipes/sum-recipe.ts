import { identity } from '../utils';
import { AnyIterable, AsyncMapper } from 'augmentative-iterable';
import { BasicReduceIngredients } from './ingredients';
import { AnyMapper } from '../types-internal';
import { prepare } from '../types-internal/prepare';

export function sumRecipe({ reduce, resolver }: BasicReduceIngredients) {
  return function <T>(
    this: AnyIterable<T>,
    mapper: AnyMapper<T> = identity as AsyncMapper<T, number>,
  ) {
    const prepared = prepare(mapper);
    return reduce.call(
      this,
      (current: any, next: any) =>
        resolver(prepared(next), (r) => +r + current),
      0,
    );
  };
}
