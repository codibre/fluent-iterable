import { truth } from '../utils';
import { AnyIterable } from '../types-internal';

export function getLast(
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
