import { countRecipe } from '../recipes/count-recipe';
import { reduceAsync } from './reduce-async';
import { filterAsync } from './filter-async';

export const countAsync = countRecipe(reduceAsync, filterAsync);
