import { AnyIterable } from '../types-internal';

export function executeRecipe(
  map: Function,
  getMapping: (action: Function) => <T>(t: T) => any,
) {
  return <T>(iterable: AnyIterable<T>, action: Function) =>
    map(iterable, getMapping(action));
}
