async function* readPartition<T>(
  iterator: AsyncIterator<T>,
  next: IteratorResult<T>,
  size: number,
): AsyncIterable<T> {
  for (; size > 0; --size) {
    if (next.done) {
      break;
    }

    yield next.value;

    if (size > 1) {
      next = await iterator.next();
    }
  }
}

export async function* partitionAsync<T>(
  iterable: AsyncIterable<T>,
  size: number,
): AsyncIterable<AsyncIterable<T>> {
  if (size < 1) {
    throw new Error(
      `Validation failed, size (${size}) expected to be bigger than 0`,
    );
  }

  const iterator = iterable[Symbol.asyncIterator]();
  for (
    let next = await iterator.next();
    !next.done;
    next = await iterator.next()
  ) {
    yield readPartition(iterator, next, size);
  }
}
