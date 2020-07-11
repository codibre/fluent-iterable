import { AnyIterable } from '../types-internal';

export function skipRecipe(skipWhile: Function) {
  return function <T>(this: AnyIterable<T>, n: number) {
    let counter = n;
    return skipWhile.call(this, () => counter-- > 0);
  };
}
