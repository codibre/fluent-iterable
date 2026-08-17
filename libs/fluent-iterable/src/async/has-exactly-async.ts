import { asyncCompareRecipe } from './async-comparer-recipe';
import { eq } from '../utils';

export const hasExactlyAsync = asyncCompareRecipe(eq);
