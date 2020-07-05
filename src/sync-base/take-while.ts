import { Predicate } from '../types';

export function* takeWhile<T>(
  iterable: Iterable<T>,
  condition: Predicate<T>,
): Iterable<T> {
  for (const t of iterable) {
    if (!condition(t)) {
      break;
    }

    yield t;
  }
}
