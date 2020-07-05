import { toArray } from './to-array';
import { sortRecipe } from '../recipes';
import { resolver, iterate } from '../helpers';

export const sort = sortRecipe(toArray, resolver, iterate);
