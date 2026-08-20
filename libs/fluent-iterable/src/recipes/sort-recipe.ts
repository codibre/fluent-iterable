import { Comparer } from '../types/base';
import { BasicIngredients } from './ingredients';

export function sortRecipe({ toArray, resolver, iterate }: BasicIngredients) {
  return function <T>(this: Iterable<T>, comparer?: Comparer<T>) {
    return iterate(resolver(toArray.call(this), (b) => b.sort(comparer)));
  };
}
