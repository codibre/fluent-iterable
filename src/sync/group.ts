import { reduceAndMap } from './reduce-and-map';
import { groupRecipe } from '../recipes/group-recipe';
import { resolver, iterate } from '../utils';
import { map } from './map';

export const group = groupRecipe(reduceAndMap, resolver, map, iterate);
