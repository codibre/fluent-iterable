import { AnyIterable } from '../types-internal';

export function concatRecipe(flatten: Function) {
  return <T>(...iterables: Array<AnyIterable<T>>) => flatten(iterables);
}
