import { Predicate } from '../types';
import { truth } from '../utils';

export function last<T>(
  iterable: Iterable<T>,
  predicate: Predicate<T> = truth,
): T | undefined {
  let result: T | undefined;

  for (const t of iterable) {
    if (predicate(t)) {
      result = t;
    }
  }

  return result;
}
