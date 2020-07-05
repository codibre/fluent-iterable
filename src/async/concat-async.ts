import { concatRecipe } from '../recipes';
import { flattenAsync } from './flatten-async';

export const concatAsync = concatRecipe(flattenAsync);
