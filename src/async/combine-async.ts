import { combineRecipe } from '../recipes/combine-recipe';
import { mapAsync } from './map-async';
import { flattenAsync } from './flatten-async';
import { resolverAsync } from 'augmentative-iterable';
import { forEachAsync } from './for-each-async';
import { filterAsync } from './filter-async';

export const combineAsync = combineRecipe(
  mapAsync,
  flattenAsync,
  resolverAsync,
  forEachAsync,
  filterAsync,
);
