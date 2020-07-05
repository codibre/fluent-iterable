import { getCaseCheckAsync } from './get-case-check-async';
import { falsity, asyncNegation } from '../utils';

export const allAsync = getCaseCheckAsync(
  falsity,
  true,
  undefined,
  asyncNegation,
);
