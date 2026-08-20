import { takeRecipe } from '../recipes';
import { takeWhile } from './take-while';

export const take = takeRecipe(takeWhile);
