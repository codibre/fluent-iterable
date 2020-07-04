import { Mapper } from '../types';
import { getSum } from '../common/get-sum';
import { reduce } from './reduce';

export const sum: <T>(
  iterable: Iterable<T>,
  mapper?: Mapper<T, number>,
) => number = getSum(reduce);
