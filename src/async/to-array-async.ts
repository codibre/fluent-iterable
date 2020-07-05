import { toArrayRecipe } from '../recipes/to-array-recipe';
import { forEachAsync } from '../async-base';
import { resolverAsync } from '../utils';

export const toArrayAsync = toArrayRecipe(forEachAsync, resolverAsync);
