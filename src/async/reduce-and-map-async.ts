import { forEachAsync } from './for-each-async';
import { reduceAndMapRecipe } from '../recipes/reduce-and-map-recipe';
import { asyncResolver } from '../utils';

export const reduceAndMapAsync = reduceAndMapRecipe(
  forEachAsync,
  asyncResolver,
);
