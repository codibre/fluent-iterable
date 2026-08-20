import { resolverAsync } from 'augmentative-iterable';
import { combineJoinRecipe } from '../recipes';
import { combineAsync } from './combine-async';
import { mapAsync } from './map-async';
import { reduceAsync } from './reduce-async';

export const combineJoinAsync = combineJoinRecipe(
  combineAsync,
  mapAsync,
  reduceAsync,
  resolverAsync,
);
