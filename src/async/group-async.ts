import { Mapper, Group, AsyncMapper } from '../types';
import { mapAsync } from './map-async';
import { reduceAndMapAsync } from './reduce-and-map-async';
import { groupRecipe } from '../recipes';
import { resolverAsync, iterateAsync } from '../helpers';
import { map } from '../sync';

export const groupAsync = groupRecipe(
  reduceAndMapAsync,
  resolverAsync,
  map,
  iterateAsync,
);
