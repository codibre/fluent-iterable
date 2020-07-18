import { filter } from './filter';
import { reduce } from './reduce';
import { countRecipe } from '../recipes';

export const count = countRecipe(reduce, filter);
