import { takeCount } from './take-count';

export function hasExactly<T>(
  iterable: Iterable<T>,
  expectedSize: number,
): boolean {
  return takeCount(iterable, expectedSize) === expectedSize;
}
