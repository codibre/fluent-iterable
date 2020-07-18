import { AnyIterable } from '../types-internal';

export function concatRecipe(iterateAll: Function) {
  return function <T>(
    this: AnyIterable<T>,
    ...iterables: Array<AnyIterable<T>>
  ) {
    return iterateAll([this, ...iterables]);
  };
}
