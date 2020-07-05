import { toArray } from './to-array';
import { sortRecipe } from '../recipes';
import { resolver, iterate } from '../utils';

export const sort = sortRecipe(toArray, resolver, iterate);
