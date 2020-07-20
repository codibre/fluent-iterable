import { AnyIterable } from 'augmentative-iterable';

export function takeRecipe(takeWhile: Function) {
  return function <T>(this: AnyIterable<T>, n: number) {
    let counter = 0;
    return takeWhile.call(this, () => counter++ < n);
  };
}
