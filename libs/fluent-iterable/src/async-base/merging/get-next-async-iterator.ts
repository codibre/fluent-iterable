import { NextResult } from './merge-types';

export async function getNextAsyncIterator<T>(
  asyncIterator: AsyncIterator<T>,
  index: number,
): Promise<NextResult<T>> {
  return {
    index,
    result: await asyncIterator.next(),
  };
}
