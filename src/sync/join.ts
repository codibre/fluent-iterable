import { Mapper } from '../types';
import { reduce } from './reduce';
import { getJoin } from '../common/get-join';

export const join: <T>(
  iterable: Iterable<T>,
  separator: string,
  mapper?: Mapper<T, string>,
) => string = getJoin(reduce, (a, b) => b(a));
