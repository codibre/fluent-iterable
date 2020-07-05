import { Mapper } from '../types';
import { map } from '../sync-base/map';
import { iterateAll } from '../utils';
import { flattenRecipe } from '../recipes';

export const flatten = flattenRecipe(iterateAll, map);
