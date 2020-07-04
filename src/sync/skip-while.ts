import { Predicate } from '../types';

export function* skipWhile<T>(
  iterable: Iterable<T>,
  condition: Predicate<T>,
): Iterable<T> {
  let found = false;

  for (const t of iterable) {
    found = found || !condition(t);
    if (!found) {
      continue;
    }

    yield t;
  }
}
