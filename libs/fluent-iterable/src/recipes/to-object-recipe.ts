import { identity } from '../utils';
import { AnyMapper } from '../types-internal';
import { AnyIterable } from 'augmentative-iterable';
import { BasicReduceIngredients } from './ingredients';
import { prepare } from '../types-internal/prepare';
import { Choose } from '../types';

export function toObjectRecipe({ reduce, resolver }: BasicReduceIngredients) {
  return function <T, V, R extends { [key: string]: V }>(
    this: AnyIterable<T>,
    baseKeySelector: AnyMapper<T>,
    baseValueSelector: AnyMapper<T> = identity,
    choose?: Choose<T>,
  ): R {
    const keySelector = prepare(baseKeySelector);
    const valueSelector = prepare(baseValueSelector);
    return reduce.call(
      this,
      (res: any, t: T) =>
        resolver(valueSelector(t), (v) =>
          resolver(keySelector(t), (k) => {
            const oldValue = res[k];
            res[k] = oldValue !== undefined && choose ? choose(oldValue, v) : v;
            return res;
          }),
        ),
      {},
    );
  };
}
