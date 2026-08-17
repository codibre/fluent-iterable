import { takeRecipe } from '../recipes';
import { takeWhileAsync } from './take-while-async';

export const takeAsync = takeRecipe(takeWhileAsync);
