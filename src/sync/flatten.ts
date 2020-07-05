import { Mapper } from '../types';
import { map } from './map';
import { iterateAll } from '../helpers';
import { flattenRecipe } from '../recipes';

export const flatten = flattenRecipe(iterateAll, map);
