import { truth, identity } from '../utils';
import { caseCheckRecipe } from './case-check-recipe';

export const first = caseCheckRecipe(identity, undefined, truth);
