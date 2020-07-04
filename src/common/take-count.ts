import { countAsync } from '../async/count-async';
import { takeAsync } from '../async/take-async';
import { AnyIterable } from './any-iterable';

export function takeCount<T>(
  iterable: AnyIterable<T>,
  expectedSize: number,
): any {
  return countAsync(takeAsync(iterable, expectedSize + 1));
}
