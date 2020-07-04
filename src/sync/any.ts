import { Predicate } from '../types';
import { truth } from '../utils';
import { getCaseCheck } from './if-case';

export const any: <T>(
  iterable: Iterable<T>,
  predicate?: Predicate<T>,
) => boolean = getCaseCheck(truth, false, truth);
