import { forEachAsync } from './for-each-async';
import { reduceAndMapRecipe } from '../recipes';
import { resolverAsync } from '../helpers';

export const reduceAndMapAsync = reduceAndMapRecipe(
  forEachAsync,
  resolverAsync,
);
