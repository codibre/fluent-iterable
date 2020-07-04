import { AsyncPredicate } from '../types';
import { truth } from '../utils';
import { AnyIterable } from '../common/any-iterable';
import { getCaseCheckAsync } from './get-case-check-async';

export const anyAsync: <T>(
  iterable: AnyIterable<T>,
  predicate?: AsyncPredicate<T>,
) => Promise<boolean> = getCaseCheckAsync(truth, false, truth);
