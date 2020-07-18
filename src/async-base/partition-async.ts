import { yieldArrayPartition } from '../recipes';
import { getChooseIteration } from '../types-internal';

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
}

const partitioning = getChooseIteration(yieldArrayPartition, iterate);

export function partitionAsync<T>(
  this: AsyncIterable<T>,
  size: number,
): AsyncIterable<AsyncIterable<T>> {
  if (size < 1) {
    throw new Error(
      `Validation failed, size (${size}) expected to be bigger than 0`,
    );
  }

  return partitioning.call(this, size);
}
