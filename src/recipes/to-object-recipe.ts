import { identity } from '../utils';
import { AnyMapper } from '../types-internal';
import { AnyIterable } from 'augmentative-iterable';
import { BasicReduceIngredients } from './ingredients';
import { prepare } from '../types-internal/prepare';

export function toObjectRecipe({ reduce, resolver }: BasicReduceIngredients) {
  return function <T, V, R extends { [key: string]: V }>(
    this: AnyIterable<T>,
    baseKeySelector: AnyMapper<T>,
    baseValueSelector: AnyMapper<T> = identity,
  ): R {
    const keySelector = prepare(baseKeySelector);
    const valueSelector = prepare(baseValueSelector);
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
