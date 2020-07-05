import { reduceRecipe } from '../recipes/reduce-recipe';
import { reduceAndMap } from './reduce-and-map';

export const reduce = reduceRecipe(reduceAndMap);
