import { truth, identity } from '../helpers';
import { getCaseCheck } from './get-case-check';

export const first = getCaseCheck(identity, undefined, truth);
