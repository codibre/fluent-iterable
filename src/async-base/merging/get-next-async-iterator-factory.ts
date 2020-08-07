import { GetNextAsyncIterator, NextResult } from './merge-types';
import { getNextAsyncIterator } from './get-next-async-iterator';
import { ErrorCallback } from '../../types-base';

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
