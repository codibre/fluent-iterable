import { AsyncMapper } from '../types';
import { mapAsync } from '../async-base/map-async';
import { flattenRecipe } from '../recipes';
import { iterateAllAsync } from '../utils';

export const flattenAsync = flattenRecipe(iterateAllAsync, mapAsync);
