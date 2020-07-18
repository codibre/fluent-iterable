import { waitAllRecipe } from '../recipes/wait-all-recipe';
import { resolver } from '../utils';
import { forEach } from './for-each';

export const waitAll = waitAllRecipe(forEach, resolver);
