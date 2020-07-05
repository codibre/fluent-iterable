import { ErrorCallback, GetNextAsyncIterator } from './merge-types';
import { getNextAsyncIteratorFactory } from './get-next-async-iterator-factory';

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
    const { result, index } = await Promise.race(
      Array.from(asyncIteratorsValues.values()),
    );
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
