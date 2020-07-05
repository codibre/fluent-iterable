import { Mapper, Group, AsyncMapper } from '../types';
import { mapAsync } from './map-async';
import { reduceAndMapAsync } from './reduce-and-map-async';
import { getGroup } from '../recipes/get-group';
import { asyncResolver, asyncIterate } from '../utils';
import { map } from '../sync';

export const groupAsync = getGroup(
  reduceAndMapAsync,
  asyncResolver,
  map,
  asyncIterate,
);
