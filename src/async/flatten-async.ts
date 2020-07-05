import { AsyncMapper } from '../types';
import { mapAsync } from './map-async';
import { flattenRecipe } from '../recipes/flatten-recipe';
import { asyncIterateAll } from '../utils';

export const flattenAsync = flattenRecipe(asyncIterateAll, mapAsync);
