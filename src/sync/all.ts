import { Predicate } from '../types';
import { getCaseCheck } from './get-case-check';
import { falsity, negation } from '../utils';

export const all: <T>(
  iterable: Iterable<T>,
  predicate: Predicate<T>,
) => boolean = getCaseCheck(falsity, true, undefined, negation);
