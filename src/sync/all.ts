import { Predicate } from '../types';
import { getCaseCheck } from './if-case';
import { falsity, negation } from '../utils';

export const all: <T>(
  iterable: Iterable<T>,
  predicate: Predicate<T>,
) => boolean = getCaseCheck(falsity, true, undefined, negation);
