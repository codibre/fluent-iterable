import { identity } from '../utils';
import { AnyMapper } from '../types-internal';
import { AnyIterable } from 'augmentative-iterable';

export function joinRecipe<T>(
  reduce: Function,
  delegator: (a: any, m: (b: any) => string) => any,
) {
  return function (
    this: AnyIterable<T>,
    separator: string,
    mapper: AnyMapper<T> = identity,
  ) {
    return reduce.call(
      this,
      (current: any, next: any) =>
        delegator(mapper(next), (nextStr: string) =>
          current ? `${current}${separator}${nextStr}` : nextStr,
        ),
      '',
    );
  };
}
