import { lesser } from '../utils';
import { asyncCompareRecipe } from './async-comparer-recipe';

export const hasLessThanAsync = asyncCompareRecipe(lesser);
