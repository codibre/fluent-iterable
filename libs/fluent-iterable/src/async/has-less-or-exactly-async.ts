import { le } from '../utils';
import { asyncCompareRecipe } from './async-comparer-recipe';

export const hasLessOrExactlyAsync = asyncCompareRecipe(le);
