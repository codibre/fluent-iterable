import { takeCount } from './take-count';

export function hasLessThan<T>(
  iterable: Iterable<T>,
  threshold: number,
): boolean {
  return takeCount(iterable, threshold + 1) < threshold;
}
