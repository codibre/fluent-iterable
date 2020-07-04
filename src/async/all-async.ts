import { AnyIterable } from '../common/any-iterable';
import { AsyncPredicate } from '../types';
import { getCaseCheckAsync } from './get-case-check-async';
import { falsity, asyncNegation } from '../utils';

export const allAsync: <T>(
  iterable: AnyIterable<T>,
  predicate: AsyncPredicate<T>,
) => Promise<boolean> = getCaseCheckAsync(
  falsity,
  true,
  undefined,
  asyncNegation,
);
