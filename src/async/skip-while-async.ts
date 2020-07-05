import { skipWhileRecipe } from '../recipes/skip-while-recipe';
import { filterAsync } from './filter-async';
import { asyncResolver } from '../utils';

export const skipWhileAsync = skipWhileRecipe(filterAsync, asyncResolver);
