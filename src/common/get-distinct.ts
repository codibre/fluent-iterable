import { identity } from '../utils';
import { AnyIterable } from './any-iterable';
import { AnyMapper } from './any-mapper';

export interface Checker {
  (value: any): boolean;
}

export function getDistinct(
  filter: Function,
  checkUnicity: <T>(value: T, mapper: AnyMapper<T>, checker: Checker) => any,
) {
  return function distinct<T, R>(
    iterable: AnyIterable<T>,
    mapper: AnyMapper<T> = identity,
  ) {
    const set = new Set<R>();
    return filter(iterable, (value: T) =>
      checkUnicity(value, mapper, (mappedValue: R) => {
        if (set.has(mappedValue)) {
          return false;
        }
        set.add(mappedValue);

        return true;
      }),
    );
  };
}
