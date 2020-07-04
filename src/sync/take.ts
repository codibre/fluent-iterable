import { getTake } from '../common/get-take';
import { takeWhile } from './take-while';

export const take: <T>(
  iterable: Iterable<T>,
  n: number,
) => Iterable<T> = getTake(takeWhile);
