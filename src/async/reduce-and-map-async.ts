import { forEachAsync } from './for-each-async';
import { reduceAndMapRecipe } from '../recipes';
import { resolverAsync } from 'augmentative-iterable';

export const reduceAndMapAsync = reduceAndMapRecipe(
  forEachAsync,
  resolverAsync,
);
