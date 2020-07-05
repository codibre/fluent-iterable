import { truth } from '../helpers';
import { AnyIterable } from '../types-internal';

export function lastRecipe(
  reduce: Function,
  getTransform: <T>(
    predicate: Function,
  ) => (current: T | undefined, next: T) => any,
) {
  return <T>(iterable: AnyIterable<T>, predicate: any = truth) => {
    const reduction = getTransform(predicate);
    return reduce(iterable, reduction, undefined as T | undefined);
  };
}
