import { sumRecipe } from '../recipes/sum-recipe';
import { reduceAsync } from './reduce-async';

export const sumAsync = sumRecipe(reduceAsync);
