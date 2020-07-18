import { yieldArrayPartition } from '../recipes';
import { getChooseIteration } from '../types-internal';

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

const partitioning = getChooseIteration(yieldArrayPartition, iterate);

export function partition<T>(
  this: Iterable<T>,
  size: number,
): Iterable<Iterable<T>> {
  if (size < 1) {
    throw new Error(
      `Validation failed, size (${size}) expected to be bigger than 0`,
    );
  }

  return partitioning.call(this, size);
}
