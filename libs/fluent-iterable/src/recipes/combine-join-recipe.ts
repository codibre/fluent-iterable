import { AnyIterable } from 'augmentative-iterable';
import { AnyMapper, FunctionAnyMapper } from '../types';
import { ResolverType } from '../types-internal';
import { prepare } from '../types-internal/prepare';
import { CombineIngredient, Ingredient, ReduceIngredient } from './ingredients';

export function combineJoinRecipe(
  combine: CombineIngredient,
  map: Ingredient,
  reduce: ReduceIngredient,
  resolver: ResolverType,
) {
  return function combineJoin<T>(
    this: AnyIterable<AnyIterable<T>>,
    baseKey?: AnyMapper<unknown>,
  ) {
    let keyA: FunctionAnyMapper<unknown[]> | undefined;
    let keyB: FunctionAnyMapper<unknown> | undefined;
    if (baseKey) {
      keyB = prepare(baseKey);
      keyA = ([a]) => keyB!(a);
    }

    return (
      reduce.call(
        this,
        (result, nextIterable) =>
          result
            ? resolver(
                combine.call(result, nextIterable, keyA, keyB),
                (combined) =>
                  map.call(combined, ([a, b]: [T[], T]) => [...a, b]),
              )
            : map.call(nextIterable, (x) => [x]),
        undefined,
      ) ?? []
    );
  };
}
