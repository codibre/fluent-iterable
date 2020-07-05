import { identity } from '../utils';
import { AnyMapper } from '../types-internal';
import { AnyIterable } from '../types-internal';

export function joinRecipe<T>(
  reduce: Function,
  delegator: (a: any, m: (b: any) => string) => any,
) {
  return (
    iterable: AnyIterable<T>,
    separator: string,
    mapper: AnyMapper<T> = identity,
  ) => {
    return reduce(
      iterable,
      (current: any, next: any) =>
        delegator(mapper(next), (nextStr: string) =>
          current ? `${current}${separator}${nextStr}` : nextStr,
        ),
      '',
    );
  };
}
