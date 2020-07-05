import { sumRecipe } from '../recipes';
import { reduceAsync } from './reduce-async';

export const sumAsync = sumRecipe(reduceAsync);
