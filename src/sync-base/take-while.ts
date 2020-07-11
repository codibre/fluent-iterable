import { Predicate } from '../types';

export function* takeWhile<T>(
  this: Iterable<T>,
  condition: Predicate<T>,
): Iterable<T> {
  for (const t of this) {
    if (!condition(t)) {
      break;
    }

    yield t;
  }
}
