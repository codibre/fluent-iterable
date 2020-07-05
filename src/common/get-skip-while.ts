import { AsyncPredicate } from '../types';
import { AnyIterable } from './any-iterable';

export function getSkipWhile(
  filter: Function,
  delegator: (c: any, a: (b: any) => any) => any,
) {
  return <T>(iterable: AnyIterable<T>, condition: AsyncPredicate<T>) => {
    let found = false;
    return filter(iterable, (t: any) =>
      delegator(condition(t), (r) => (found = found || !r)),
    );
  };
}
