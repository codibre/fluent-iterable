import { AsyncMapper } from '../types';
import { mapAsync } from './map-async';
import { flattenRecipe } from '../recipes';
import { iterateAllAsync } from '../helpers';

export const flattenAsync = flattenRecipe(iterateAllAsync, mapAsync);
