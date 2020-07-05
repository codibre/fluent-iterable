import { identity } from '../utils';
import { AnyMapper } from './any-mapper';
import { AnyIterable } from './any-iterable';

export function getJoin<T>(
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
