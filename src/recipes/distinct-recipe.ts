import { identity } from '../helpers';
import { AnyIterable } from '../types-internal';
import { AnyMapper } from '../types-internal';

interface Checker {
  (value: any): boolean;
}

export function distinctRecipe(
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
