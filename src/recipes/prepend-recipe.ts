import { AnyIterable } from '../types-internal';

export function prependRecipe(concat: Function): any {
  return function <T>(this: AnyIterable<T>, item: T) {
    return concat.call([item], this);
  };
}
