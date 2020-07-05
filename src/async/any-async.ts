import { truth } from '../utils';
import { getCaseCheckAsync } from './get-case-check-async';

export const anyAsync = getCaseCheckAsync(truth, false, truth);
