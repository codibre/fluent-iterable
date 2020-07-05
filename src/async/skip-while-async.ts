import { skipWhileRecipe } from '../recipes';
import { filterAsync } from './filter-async';
import { resolverAsync } from '../utils';

export const skipWhileAsync = skipWhileRecipe(filterAsync, resolverAsync);
