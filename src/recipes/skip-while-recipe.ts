import { AsyncPredicate } from '../types';
import { AnyIterable } from 'augmentative-iterable';

export function skipWhileRecipe(
  filter: Function,
  delegator: (c: any, a: (b: any) => any) => any,
) {
  return function <T>(this: AnyIterable<T>, condition: AsyncPredicate<T>) {
    let found = false;
    return filter.call(this, (t: any) =>
      delegator(condition(t), (r) => (found = found || !r)),
    );
  };
}
