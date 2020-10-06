import { sortAsync } from './sort-async';
import { sortByRecipe } from '../recipes';

export const sortByAsync = sortByRecipe(sortAsync);
