function* readPartition<T>(
  iterator: Iterator<T>,
  next: IteratorResult<T>,
  size: number,
): Iterable<T> {
  for (; size > 0; --size) {
    if (next.done) {
      break;
    }

    yield next.value;

    if (size > 1) {
      next = iterator.next();
    }
  }
}

export function* partition<T>(
  this: Iterable<T>,
  size: number,
): Iterable<Iterable<T>> {
  if (size < 1) {
    throw new Error(
      `Validation failed, size (${size}) expected to be bigger than 0`,
    );
  }

  const iterator = this[Symbol.iterator]();
  for (let next = iterator.next(); !next.done; next = iterator.next()) {
    yield readPartition(iterator, next, size);
  }
}
