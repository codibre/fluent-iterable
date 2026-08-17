import { ge } from '../utils';
import { asyncCompareRecipe } from './async-comparer-recipe';

export const hasMoreOrExactlyAsync = asyncCompareRecipe(ge);
