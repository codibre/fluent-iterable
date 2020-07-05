import { forEachAsync } from './for-each-async';
import { reduceAndMapRecipe } from '../recipes';
import { asyncResolver } from '../utils';

export const reduceAndMapAsync = reduceAndMapRecipe(
  forEachAsync,
  asyncResolver,
);
