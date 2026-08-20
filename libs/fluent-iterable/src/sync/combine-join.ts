import { resolver } from 'augmentative-iterable';
import { combineJoinRecipe } from '../recipes';
import { combine } from './combine';
import { map } from './map';
import { reduce } from './reduce';

export const combineJoin = combineJoinRecipe(combine, map, reduce, resolver);
