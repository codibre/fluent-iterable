import { AnyIterable } from 'augmentative-iterable';
import { AsyncReducer } from '../types';
import { ToObjectChainIngredients } from './ingredients';
import { toObjectChainReduceRecipe } from './to-object-chain-reduce-recipe';

export function toChainRecipeFactory(
  base: <T, R>(
    this: AnyIterable<any>,
    initial: () => R,
    reducer: AsyncReducer<T, R>,
    ...keys: string[]
  ) => any,
) {
  return function (this: AnyIterable<any>, ...keys: string[]) {
    return base.call(
      this,
      () => [],
      (acc: any, x: any) => {
        acc.push(x);
        return acc;
      },
      ...keys,
    );
  };
}

export function toObjectChainRecipe(ing: ToObjectChainIngredients) {
  return toChainRecipeFactory(toObjectChainReduceRecipe(ing));
}
