import { AnyIterable } from 'augmentative-iterable';
import { ConcatIngredient } from './ingredients';

export function prependRecipe(concat: ConcatIngredient): any {
  return function <T>(this: AnyIterable<T>, ...items: T[]) {
    return concat.call(items, this);
  };
}
