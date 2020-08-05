import { reduceAndMap } from './reduce-and-map';
import { avgRecipe } from '../recipes';
import { resolver } from 'augmentative-iterable';

export const avg = avgRecipe(reduceAndMap, resolver);
