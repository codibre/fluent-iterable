import { Predicate } from '../types';

export function* filter<T>(
  iterable: Iterable<T>,
  predicate: Predicate<T>,
): Iterable<T> {
  for (const t of iterable) {
    if (predicate(t)) {
      yield t;
    }
  }
}
