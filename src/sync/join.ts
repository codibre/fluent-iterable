import { Mapper } from '../types';
import { reduce } from './reduce';
import { getJoin } from '../common/get-join';
import { resolver } from '../utils';

export const join: <T>(
  iterable: Iterable<T>,
  separator: string,
  mapper?: Mapper<T, string>,
) => string = getJoin(reduce, resolver);
