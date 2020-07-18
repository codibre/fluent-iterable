import { waitAllRecipe } from '../recipes/wait-all-recipe';
import { forEachAsync } from './for-each-async';
import { resolverAsync } from '../utils';

export const waitAllAsync = waitAllRecipe(forEachAsync, resolverAsync);
