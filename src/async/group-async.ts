import { Mapper, Group, AsyncMapper } from '../types';
import { mapAsync } from './map-async';
import { reduceAndMapAsync } from './reduce-and-map-async';
import { groupRecipe } from '../recipes/group-recipe';
import { asyncResolver, asyncIterate } from '../utils';
import { map } from '../sync';

export const groupAsync = groupRecipe(
  reduceAndMapAsync,
  asyncResolver,
  map,
  asyncIterate,
);
