import { skipWhileRecipe } from '../recipes';
import { filterAsync } from './filter-async';
import { asyncResolver } from '../utils';

export const skipWhileAsync = skipWhileRecipe(filterAsync, asyncResolver);
