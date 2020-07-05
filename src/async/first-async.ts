import { truth, identity } from '../helpers';
import { getCaseCheckAsync } from './get-case-check-async';

export const firstAsync = getCaseCheckAsync(identity, undefined, truth);
