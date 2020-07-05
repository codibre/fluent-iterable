import { forEachAsync } from '../async-base/for-each-async';
import { reduceAndMapRecipe } from '../recipes';
import { resolverAsync } from '../utils';

export const reduceAndMapAsync = reduceAndMapRecipe(
  forEachAsync,
  resolverAsync,
);
