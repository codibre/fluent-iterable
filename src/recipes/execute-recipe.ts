import { AnyIterable } from 'augmentative-iterable';

export function executeRecipe(
  map: Function,
  getMapping: (action: Function) => <T>(t: T) => any,
) {
  return function <T>(this: AnyIterable<T>, action: Function) {
    return map.call(this, getMapping(action));
  };
}
