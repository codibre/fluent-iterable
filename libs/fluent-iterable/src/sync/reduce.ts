import { resolver } from 'augmentative-iterable';
import { reduceRecipe } from '../recipes';
import { reduceAndMap } from './reduce-and-map';

export const reduce = reduceRecipe(reduceAndMap, resolver);
