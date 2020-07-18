import { map } from './map';
import { iterateAll } from '../utils';
import { flattenRecipe } from '../recipes';

export const flatten = flattenRecipe(iterateAll, map);
