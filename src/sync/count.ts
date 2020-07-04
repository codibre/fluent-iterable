import { Predicate } from '../types';
import { truth } from '../utils';

export function count<T>(
  iterable: Iterable<T>,
  predicate: Predicate<T> = truth,
): number {
  let counter = 0;
  for (const t of iterable) {
    if (predicate(t)) {
      counter++;
    }
  }

  return counter;
}
