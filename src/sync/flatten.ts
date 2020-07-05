import { Mapper } from '../types';
import { map } from './map';
import { iterateAll } from '../utils';
import { flattenRecipe } from '../recipes/flatten-recipe';

export const flatten = flattenRecipe(iterateAll, map);
