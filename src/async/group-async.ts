import { reduceAndMapAsync } from './reduce-and-map-async';
import { groupRecipe } from '../recipes';
import { iterateAsync } from '../utils';
import { map } from '../sync';
import { resolverAsync } from 'augmentative-iterable';

export const groupAsync = groupRecipe(
  reduceAndMapAsync,
  resolverAsync,
  map,
  iterateAsync,
);
