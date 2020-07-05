import { getCaseCheck } from './get-case-check';
import { falsity, negation } from '../helpers';

export const all = getCaseCheck(falsity, true, undefined, negation);
