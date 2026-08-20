import { truth } from '../utils';
import { caseCheckRecipe } from './case-check-recipe';

export const any = caseCheckRecipe(truth, false, truth);
