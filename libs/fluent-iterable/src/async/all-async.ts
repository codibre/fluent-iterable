import { caseCheckAsyncRecipe } from './case-check-async-recipe';
import { falsity, asyncNegation } from '../utils';

export const allAsync = caseCheckAsyncRecipe(
  falsity,
  true,
  undefined,
  asyncNegation,
);
