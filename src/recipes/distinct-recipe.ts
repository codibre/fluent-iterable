import { identity } from '../utils';
import { AnyIterable } from 'augmentative-iterable';
import { AnyMapper } from '../types-internal';

interface Checker {
  (value: any): boolean;
}

export function distinctRecipe(
  filter: Function,
  checkUnicity: <T>(value: T, mapper: AnyMapper<T>, checker: Checker) => any,
) {
  return function distinct<T, R>(
    this: AnyIterable<T>,
    mapper: AnyMapper<T> = identity,
  ) {
    const set = new Set<R>();
    return filter.call(this, (value: T) =>
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
