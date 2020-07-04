import { Predicate } from '../types';
import { truth, identity } from '../utils';
import { getCaseCheck } from './get-case-check';

export const first: <T>(
  iterable: Iterable<T>,
  predicate?: Predicate<T>,
) => T | undefined = getCaseCheck(identity, undefined, truth);
