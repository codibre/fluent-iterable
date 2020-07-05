import { concatRecipe } from '../recipes/concat-recipe';
import { flattenAsync } from './flatten-async';

export const concatAsync = concatRecipe(flattenAsync);
