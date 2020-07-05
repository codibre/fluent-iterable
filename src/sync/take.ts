import { takeRecipe } from '../recipes/take-recipe';
import { takeWhile } from './take-while';

export const take = takeRecipe(takeWhile);
