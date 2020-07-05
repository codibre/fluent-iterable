import { topRecipe } from '../recipes';
import { reduceAndMapAsync } from './reduce-and-map-async';

export const topAsync = topRecipe(reduceAndMapAsync);
