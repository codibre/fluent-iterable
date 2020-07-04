import { Predicate } from '../types';
import { filter } from './filter';
import { reduce } from './reduce';
import { getCount } from '../common/get-count';

export const count: <T>(
  iterable: Iterable<T>,
  predicate?: Predicate<T>,
) => number = getCount(reduce, filter);
