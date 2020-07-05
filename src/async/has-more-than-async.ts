import { greater } from '../utils';
import { asyncCompareRecipe } from './async-comparer-recipe';

export const hasMoreThanAsync = asyncCompareRecipe(greater);
