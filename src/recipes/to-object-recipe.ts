import { identity } from '../utils';
import { AnyMapper } from '../types-internal';
import { AnyIterable } from 'augmentative-iterable';
import { BasicReduceIngredients } from './ingredients';

export function toObjectRecipe({ reduce, resolver }: BasicReduceIngredients) {
  return function <T, V, R extends { [key: string]: V }>(
    this: AnyIterable<T>,
    keySelector: AnyMapper<T>,
    valueSelector: AnyMapper<T> = identity,
  ): R {
    return reduce.call(
      this,
      (res: any, t: T) =>
        resolver(valueSelector(t), (v) =>
          resolver(keySelector(t), (k) => {
            res[k] = v;
            return res;
          }),
        ),
      {},
    );
  };
}
