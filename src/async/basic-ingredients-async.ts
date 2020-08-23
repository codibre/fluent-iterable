import { resolverAsync } from 'augmentative-iterable';
import { BasicIngredients } from '../recipes/ingredients';
import { iterateAllAsync, iterateAsync } from '../utils';
import { filterAsync } from './filter-async';
import { forEachAsync } from './for-each-async';
import { mapAsync } from './map-async';
import { takeWhileAsync } from './take-while-async';
import { toArrayAsync } from './to-array-async';

export const basicAsync: BasicIngredients = {
  map: mapAsync,
  resolver: resolverAsync,
  forEach: forEachAsync,
  filter: filterAsync,
  takeWhile: takeWhileAsync,
  iterate: iterateAsync,
  iterateAll: iterateAllAsync,
  toArray: toArrayAsync,
};
