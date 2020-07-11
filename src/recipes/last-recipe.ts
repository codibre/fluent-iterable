import { truth } from '../utils';
import { AnyIterable } from '../types-internal';

export function lastRecipe(
  reduce: Function,
  getTransform: <T>(
    predicate: Function,
  ) => (current: T | undefined, next: T) => any,
) {
  return function <T>(this: AnyIterable<T>, predicate: any = truth) {
    const reduction = getTransform(predicate);
    return reduce.call(this, reduction, undefined as T | undefined);
  };
}
