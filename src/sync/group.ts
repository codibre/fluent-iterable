import { reduceAndMap } from './reduce-and-map';
import { groupRecipe } from '../recipes';
import { iterate } from '../utils';
import { map } from './map';
import { resolver } from 'augmentative-iterable';

export const group = groupRecipe(reduceAndMap, resolver, map, iterate);
