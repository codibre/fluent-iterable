import { AnyIterable } from '../types-internal';

export function takeRecipe(takeWhile: Function) {
  return <T>(iterable: AnyIterable<T>, n: number) => {
    let counter = 0;
    return takeWhile(iterable, () => counter++ < n);
  };
}
