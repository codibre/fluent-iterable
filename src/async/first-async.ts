import { truth, identity } from '../utils';
import { getCaseCheckAsync } from './get-case-check-async';

export const firstAsync = getCaseCheckAsync(identity, undefined, truth);
