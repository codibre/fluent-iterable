import { AnyIterable } from 'augmentative-iterable';
import { ConcatIngredient } from './ingredients';

export function appendRecipe(concat: ConcatIngredient): any {
  return function <T>(this: AnyIterable<T>, ...items: T[]) {
    return concat.call(this, items);
  };
}
