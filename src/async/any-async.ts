import { truth } from '../helpers';
import { getCaseCheckAsync } from './get-case-check-async';

export const anyAsync = getCaseCheckAsync(truth, false, truth);
