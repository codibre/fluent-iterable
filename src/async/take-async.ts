import { takeRecipe } from '../recipes';
import { takeWhileAsync } from '../async-base/take-while-async';

export const takeAsync = takeRecipe(takeWhileAsync);
