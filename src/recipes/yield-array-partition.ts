import { Equality } from '../types-base';
import { getPartitionComparer } from './get-partition-comparer';

export function* yieldArrayPartition<T>(
  arr: T[],
  criteria: number | Equality<T>,
): any {
  const comparer = getPartitionComparer<T>(criteria);
  let i = 0;
  while (i < arr.length) {
    yield (function* () {
      let previous = arr[i];
      yield previous;
      i++;
      for (
        let current = arr[i];
        comparer(previous, current) && i < arr.length;
        i++, current = arr[i]
      ) {
        yield current;
        previous = current;
      }
    })();
  }
}
