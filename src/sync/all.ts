import { Predicate } from '../types';

export function all<T>(
  iterable: Iterable<T>,
  predicate: Predicate<T>,
): boolean {
  for (const t of iterable) {
    if (!predicate(t)) {
      return false;
    }
  }

  return true;
}
