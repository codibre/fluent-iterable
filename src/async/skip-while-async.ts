import { AsyncPredicate } from '../types';
import { getSkipWhile } from '../common/get-skip-while';
import { filterAsync } from './filter-async';
import { AnyIterable } from '../common';
import { asyncResolver } from '../utils';

export const skipWhileAsync: <T>(
  iterable: AnyIterable<T>,
  condition: AsyncPredicate<T>,
) => AsyncIterable<T> = getSkipWhile(filterAsync, asyncResolver);
