import { truth, identity } from '../utils';
import { caseCheckAsyncRecipe } from './case-check-async-recipe';

export const firstAsync = caseCheckAsyncRecipe(identity, undefined, truth);
