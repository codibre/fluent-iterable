import { skipWhileRecipe } from '../recipes';
import { filterAsync } from '../async-base/filter-async';
import { resolverAsync } from '../utils';

export const skipWhileAsync = skipWhileRecipe(filterAsync, resolverAsync);
