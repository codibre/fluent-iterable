import { reduceAndMapAsync } from './reduce-and-map-async';
import { groupRecipe, orderedGroupRecipe } from '../recipes';
import { iterateAsync } from '../utils';
import { resolverAsync } from 'augmentative-iterable';
import { partitionAsync } from './partition-async';
import { mapAsync } from './map-async';
import { forEachAsync } from './for-each-async';

export const groupAsync = groupRecipe(
  reduceAndMapAsync,
  resolverAsync,
  iterateAsync,
  orderedGroupRecipe(mapAsync, resolverAsync, partitionAsync, forEachAsync),
);
