import { lt } from '../utils';
import { asyncCompareRecipe } from './async-comparer-recipe';

export const hasLessThanAsync = asyncCompareRecipe(lt);
