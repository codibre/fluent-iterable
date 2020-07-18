import { getPartition } from '../recipes/partition-recipe';

function* iterate<T>(arr: Iterable<T>, size: number) {
  const iterator = arr[Symbol.iterator]();
  let next = iterator.next();
  while (!next.done) {
    yield (function* () {
      for (let i = 0; i < size && !next.done; i++) {
        yield next.value;
        next = iterator.next();
      }
    })();
  }
}

export const partition = getPartition(iterate);
