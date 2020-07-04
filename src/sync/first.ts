import { Predicate } from '../types';
import { truth } from '../utils';

export function first<T>(
  iterable: Iterable<T>,
  predicate: Predicate<T> = truth as any,
): T | undefined {
  for (const t of iterable) {
    if (predicate(t)) {
      return t;
    }
  }

  return undefined;
}
