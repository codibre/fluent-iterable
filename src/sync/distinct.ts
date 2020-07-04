import { Mapper } from '../types';
import { getDistinct } from '../common/get-distinct';
import { filter } from './filter';

export const distinct: <T, R>(
  iterable: Iterable<T>,
  mapper?: Mapper<T, R>,
) => Iterable<T> = getDistinct(filter, (v, mapper, check) => check(mapper(v)));
