import { AnyIterable } from 'augmentative-iterable';

export function containsRecipe(any: Function) {
  return function <T>(this: AnyIterable<T>, item: T) {
    return any.call(this, (next: any) => next === item);
  };
}
