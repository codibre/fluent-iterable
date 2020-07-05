import { AnyIterable } from '../types-internal';

export function skipRecipe(skipWhile: Function) {
  return <T>(iterable: AnyIterable<T>, n: number) => {
    let counter = n;
    return skipWhile(iterable, () => counter-- > 0);
  };
}
