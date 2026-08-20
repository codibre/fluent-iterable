import { AnyIterable } from 'augmentative-iterable';
import { AnyMapper, FunctionAnyMapper } from '../types-internal';
import { DistinctIngredients } from './ingredients';
import { prepare } from '../types-internal/prepare';
import { Choose } from '../types';

export function chooseToMapRecipe({ forEach, resolver }: DistinctIngredients) {
  return function distinct<T>(
    this: AnyIterable<T>,
    getKey: FunctionAnyMapper<any>,
    mapper: FunctionAnyMapper<any>,
    choose?: Choose<T>,
  ) {
    const map = new Map();
    return resolver(
      forEach.call(this, (x) => {
        return resolver(getKey(x), (k) => {
          const old = map.get(k);
          const newOneP =
            old === undefined ? mapper(x) : choose?.(old, x) || old;
          return resolver(newOneP, (newOne: any) => {
            if (old !== newOne) {
              map.set(k, newOne);
            }
          });
        });
      }),
      () => map,
    );
  };
}

export function toMapRecipe(ingredients: DistinctIngredients) {
  const choose = chooseToMapRecipe(ingredients);

  return function distinct<T>(
    this: AnyIterable<T>,
    getKey: AnyMapper<T>,
    mapper: AnyMapper<T>,
    getReduced?: Choose<unknown>,
  ) {
    const preparedGetKey = prepare(getKey);
    const preparedMapper = prepare(mapper);
    return choose.call(this, preparedGetKey, preparedMapper, getReduced);
  };
}
