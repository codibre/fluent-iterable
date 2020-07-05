import { skipWhileRecipe } from '../recipes';
import { filterAsync } from './filter-async';
import { resolverAsync } from '../helpers';

export const skipWhileAsync = skipWhileRecipe(filterAsync, resolverAsync);
