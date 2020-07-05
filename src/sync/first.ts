import { truth, identity } from '../utils';
import { getCaseCheck } from './get-case-check';

export const first = getCaseCheck(identity, undefined, truth);
