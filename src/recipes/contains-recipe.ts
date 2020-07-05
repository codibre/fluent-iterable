import { AnyIterable } from '../types-internal';

export function containsRecipe(any: Function) {
  return <T>(iterable: AnyIterable<T>, item: T) =>
    any(iterable, (next: any) => next === item);
}
