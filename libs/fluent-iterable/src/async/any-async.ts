import { truth } from '../utils';
import { caseCheckAsyncRecipe } from './case-check-async-recipe';

export const anyAsync = caseCheckAsyncRecipe(truth, false, truth);
