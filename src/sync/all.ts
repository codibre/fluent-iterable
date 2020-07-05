import { getCaseCheck } from './get-case-check';
import { falsity, negation } from '../utils';

export const all = getCaseCheck(falsity, true, undefined, negation);
