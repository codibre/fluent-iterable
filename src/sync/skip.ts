import { getSkip } from '../common/get-skip';
import { skipWhile } from './skip-while';

export const skip: <T>(
  iterable: Iterable<T>,
  n: number,
) => Iterable<T> = getSkip(skipWhile);
