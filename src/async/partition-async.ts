import { getPartition } from '../recipes/partition-recipe';

async function* iterate<T>(arr: AsyncIterable<T>, size: number) {
  const iterator = arr[Symbol.asyncIterator]();
  for (let next = await iterator.next(); !next.done; ) {
    yield (async function* () {
      for (let i = 0; i < size && !next.done; i++) {
        yield next.value;
        next = await iterator.next();
      }
    })();
  }
  iterator.return?.call(iterator);
}

export const partitionAsync = getPartition(iterate);
