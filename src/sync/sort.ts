import { Comparer } from '../types';
import { toArray } from './to-array';

export function* sort<T>(
  iterable: Iterable<T>,
  comparer?: Comparer<T>,
): Iterable<T> {
  yield* toArray(iterable).sort(comparer);
}
