import { yieldArrayPartition } from '../recipes';

export function* partition<T>(
  this: Iterable<T>,
  size: number,
): Iterable<Iterable<T>> {
  if (size < 1) {
    throw new Error(
      `Validation failed, size (${size}) expected to be bigger than 0`,
    );
  }

  if (Array.isArray(this)) {
    yield* yieldArrayPartition(this, size);
  } else {
    const iterator = this[Symbol.iterator]();
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
}
