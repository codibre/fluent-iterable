import { asyncCompareRecipe } from './async-comparer-recipe';
import { equals } from '../utils';

export const hasExactlyAsync = asyncCompareRecipe(equals);
