import { filter } from './filter';
import { reduce } from './reduce';
import { countRecipe } from '../recipes/count-recipe';

export const count = countRecipe(reduce, filter);
