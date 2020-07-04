import { Predicate } from '../types';
import { truth } from '../utils';
import { getCaseCheck } from './get-case-check';

export const any: <T>(
  iterable: Iterable<T>,
  predicate?: Predicate<T>,
) => boolean = getCaseCheck(truth, false, truth);
