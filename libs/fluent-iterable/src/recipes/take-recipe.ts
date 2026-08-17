import { AnyIterable } from 'augmentative-iterable';
import { Ingredient } from './ingredients';

export function takeRecipe(takeWhile: Ingredient) {
  return function <T>(this: AnyIterable<T>, n: number) {
    let counter = 0;
    return takeWhile.call(this, () => counter++ < n);
  };
}
