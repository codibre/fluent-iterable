import { takeCount } from './take-count';

export function hasMoreThan<T>(
  iterable: Iterable<T>,
  threshold: number,
): boolean {
  return takeCount(iterable, threshold) > threshold;
}
