import { AnyIterable } from 'augmentative-iterable';
import { ToObjectChainIngredients } from './ingredients';
import { toObjectChainReduceRecipe } from './to-object-chain-reduce-recipe';

export function toObjectChainRecipe(ing: ToObjectChainIngredients) {
  const base = toObjectChainReduceRecipe(ing);
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
