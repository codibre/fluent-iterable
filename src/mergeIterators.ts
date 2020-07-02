export interface ErrorCallback {
  (error: Error, index: number): unknown;
}

interface NextResult<T> {
  index: number;
  result: IteratorResult<T>;
}

interface GetNextAsyncIterator<T> {
  (asyncIterator: AsyncIterator<T>, index: number): Promise<NextResult<T>>;
}

export async function getNextAsyncIterator<T>(
  asyncIterator: AsyncIterator<T>,
  index: number,
): Promise<NextResult<T>> {
  return {
    index,
    result: await asyncIterator.next(),
  };
}

export function getNextAsyncIteratorFactory<T>(
  callback?: ErrorCallback,
): GetNextAsyncIterator<T> {
  return !callback
    ? getNextAsyncIterator
    : async (
        asyncIterator: AsyncIterator<T>,
        index: number,
      ): Promise<NextResult<T>> => {
        try {
          return await getNextAsyncIterator(asyncIterator, index);
        } catch (err) {
          callback(err, index);
          return {
            index,
            result: {
              done: true,
            } as IteratorResult<T>,
          };
        }
      };
}

export async function* mergeIterators<T>(
  callback: ErrorCallback | undefined,
  ...iterators: AsyncIterator<T>[]
): AsyncIterable<T> {
  const getNextAsyncIteratorValue = getNextAsyncIteratorFactory(callback);
  const asyncIteratorsValues = new Map();
  iterators.forEach((it, idx) =>
    asyncIteratorsValues.set(idx, getNextAsyncIteratorValue(it, idx)),
  );

  while (asyncIteratorsValues.size > 0) {
    const response = await Promise.race(
      Array.from(asyncIteratorsValues.values()),
    );
    if (response) {
      const { result, index } = response;
      if (result.done) {
        asyncIteratorsValues.delete(index);
      } else {
        yield result.value;
        asyncIteratorsValues.set(
          index,
          getNextAsyncIteratorValue(iterators[index], index),
        );
      }
    }
  }
}
