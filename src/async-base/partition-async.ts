import { yieldArrayPartition } from '../recipes';
import { iterateAsync } from '../utils';

async function* readPartition<T>(
  iterator: AsyncIterator<T>,
  next: IteratorResult<T>,
  size: number,
): AsyncIterable<T> {
  for (; size > 1 && !next.done; size--) {
    yield next.value;
    next = await iterator.next();
  }
}

export async function* partitionAsync<T>(
  this: AsyncIterable<T>,
  size: number,
): AsyncIterable<AsyncIterable<T>> {
  if (size < 1) {
    throw new Error(
      `Validation failed, size (${size}) expected to be bigger than 0`,
    );
  }

  if (Array.isArray(this)) {
    yield* yieldArrayPartition(this, size);
  } else {
    const iterator = this[Symbol.asyncIterator]();
    for (let next = await iterator.next(); !next.done; ) {
      yield (async function* () {
        for (let i = 0; i < size && !next.done; i++) {
          yield next.value;
          next = await iterator.next();
        }
      })();
    }
  }
}
