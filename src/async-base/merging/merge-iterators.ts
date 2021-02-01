import { NextResult } from './merge-types';
import { getNextAsyncIteratorFactory } from './get-next-async-iterator-factory';
import { ErrorCallback } from '../../types/base';

async function getNextValue(
  asyncIteratorsValues: Map<any, any>,
): Promise<NextResult<any>> {
  return Promise.race(Array.from(asyncIteratorsValues.values()));
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
    const { result, index } = await getNextValue(asyncIteratorsValues);
    if (result.done) {
      iterators[index].return?.call(iterators[index]);
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
