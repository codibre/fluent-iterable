import { reduceRecipe } from '../recipes/reduce-recipe';
import { reduceAndMapAsync } from './reduce-and-map-async';

export const reduceAsync = reduceRecipe(reduceAndMapAsync);
