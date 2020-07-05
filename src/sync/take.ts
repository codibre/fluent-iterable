import { takeRecipe } from '../recipes';
import { takeWhile } from '../sync-base/take-while';

export const take = takeRecipe(takeWhile);
