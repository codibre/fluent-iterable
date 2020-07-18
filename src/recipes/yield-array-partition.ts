import { AnyIterable } from '../types-internal';

export function* yieldArrayPartition<T>(arr: T[], size: number): any {
  let i = 0;
  while (i < arr.length) {
    yield (function* () {
      for (let j = i; i < j + size && i < arr.length; i++) {
        yield arr[i];
      }
    })();
  }
}
