import { takeRecipe } from '../recipes/take-recipe';
import { takeWhileAsync } from './take-while-async';

export const takeAsync = takeRecipe(takeWhileAsync);
