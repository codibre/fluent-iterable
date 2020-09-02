import { AnyIterable } from 'augmentative-iterable';
import { Ingredient } from './ingredients';

export function skipRecipe(skipWhile: Ingredient) {
  return function <T>(this: AnyIterable<T>, n: number) {
    let counter = n;
    return skipWhile.call(this, () => counter-- > 0);
  };
}
