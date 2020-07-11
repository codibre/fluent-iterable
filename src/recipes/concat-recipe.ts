import { AnyIterable } from '../types-internal';

export function concatRecipe(flatten: Function) {
  return function <T>(
    this: AnyIterable<T>,
    ...iterables: Array<AnyIterable<T>>
  ) {
    return flatten.call([this, ...iterables]);
  };
}
