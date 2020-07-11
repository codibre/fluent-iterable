import { Predicate } from '../types';

export function* filter<T>(
  this: Iterable<T>,
  predicate: Predicate<T>,
): Iterable<T> {
  for (const t of this) {
    if (predicate(t)) {
      yield t;
    }
  }
}
