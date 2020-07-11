import { AnyIterable } from '../types-internal';

export function containsRecipe(any: Function) {
  return function <T>(this: AnyIterable<T>, item: T) {
    return any.call(this, (next: any) => next === item);
  };
}
