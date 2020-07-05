import { truth } from '../helpers';
import { getCaseCheck } from './get-case-check';

export const any = getCaseCheck(truth, false, truth);
