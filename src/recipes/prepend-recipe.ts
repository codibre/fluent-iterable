import { AnyIterable } from '../types-internal';

export function prependRecipe(concat: Function): any {
  return <T>(iterable: AnyIterable<T>, item: T) => concat([item], iterable);
}
