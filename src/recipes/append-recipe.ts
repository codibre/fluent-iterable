import { AnyIterable } from '../types-internal';

export function appendRecipe(concat: Function): any {
  return <T>(iterable: AnyIterable<T>, item: T) => concat(iterable, [item]);
}
