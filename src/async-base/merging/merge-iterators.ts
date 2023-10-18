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
      if (iterators[index].return) {
        iterators[index].return!.call(iterators[index]);
      }
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

/**
 * Merge the informed async iterables into one. The item orders will be defined from what is returned first
 * @param iterables the iterables to merge
 */
export function mergeIterables<T>(
  ...iterables: AsyncIterable<T>[]
): AsyncIterable<T>;
/**
 * Merge the informed async iterables into one. The item orders will be defined from what is returned first
 * @param callback A callback to case in case that any iterable throws an error. If informed, an failed iterable will not cause an error in the merging
 * @param iterables the iterables to merge
 */
export function mergeIterables<T>(
  callback: ErrorCallback,
  ...iterables: AsyncIterable<T>[]
): AsyncIterable<T>;
export function mergeIterables<T>(
  callback: ErrorCallback | undefined | AsyncIterable<T>,
  ...iterables: AsyncIterable<T>[]
): AsyncIterable<T> {
  if (callback && typeof callback !== 'function') {
    iterables = [callback, ...iterables];
    callback = undefined;
  }
  return mergeIterators(
    callback,
    ...iterables.map((x) => x[Symbol.asyncIterator]()),
  );
}
