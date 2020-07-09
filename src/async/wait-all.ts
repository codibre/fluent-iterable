import { waitAllRecipe } from '../recipes/wait-all-recipe';
import { forEachAsync } from '../async-base';
import { resolverAsync } from '../utils';

export const waitAllAsync = waitAllRecipe(forEachAsync, resolverAsync);
