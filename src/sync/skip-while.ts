import { Predicate } from '../types';
import { getSkipWhile } from '../common/get-skip-while';
import { filter } from './filter';
import { resolver } from '../utils';

export const skipWhile: <T>(
  iterable: Iterable<T>,
  condition: Predicate<T>,
) => Iterable<T> = getSkipWhile(filter, resolver);
