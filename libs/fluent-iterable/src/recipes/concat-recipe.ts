import { AnyIterable } from 'augmentative-iterable';

export function concatRecipe(iterateAll: Function) {
  return function <T>(
    this: AnyIterable<T>,
    ...iterables: Array<AnyIterable<T>>
  ) {
    return iterateAll([this, ...iterables]);
  };
}
