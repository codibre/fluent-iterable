import { getSkip } from '../common/get-skip';
import { skipWhileAsync } from './skip-while-async';

export const skipAsync: <T>(
  iterable: AsyncIterable<T>,
  n: number,
) => AsyncIterable<T> = getSkip(skipWhileAsync);
