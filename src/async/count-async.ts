import { AnyIterable } from '../common/any-iterable';
import { AsyncPredicate } from '../types';
import { truth } from '../utils';
import { getCount } from '../common/get-count';
import { reduceAsync } from './reduce-async';
import { filterAsync } from './filter-async';

export const countAsync: <T>(
  iterable: Iterable<T>,
  predicate?: AsyncPredicate<T>,
) => Promise<number> = getCount(reduceAsync, filterAsync);
