import { waitAllRecipe } from '../recipes/wait-all-recipe';
import { resolver } from '../utils';
import { forEach } from '../sync-base';

export const waitAll = waitAllRecipe(forEach, resolver);
