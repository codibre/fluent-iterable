import { AnyIterable } from 'augmentative-iterable';

export function appendRecipe(concat: Function): any {
  return function <T>(this: AnyIterable<T>, item: T) {
    return concat.call(this, [item]);
  };
}
