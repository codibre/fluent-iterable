import { caseCheckRecipe } from './case-check-recipe';
import { falsity, negation } from '../utils';

export const all = caseCheckRecipe(falsity, true, undefined, negation);
