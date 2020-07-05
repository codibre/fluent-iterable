import { reduceAndMap } from './reduce-and-map';
import { groupRecipe } from '../recipes';
import { resolver, iterate } from '../helpers';
import { map } from './map';

export const group = groupRecipe(reduceAndMap, resolver, map, iterate);
