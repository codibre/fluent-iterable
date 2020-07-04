import { AsyncPredicate } from '../types';
import { truth, identity } from '../utils';
import { AnyIterable } from '../common/any-iterable';
import { getCaseCheckAsync } from './get-case-check-async';

export const firstAsync: <T>(
  iterable: AnyIterable<T>,
  predicate?: AsyncPredicate<T>,
) => Promise<T | undefined> = getCaseCheckAsync(identity, undefined, truth);
