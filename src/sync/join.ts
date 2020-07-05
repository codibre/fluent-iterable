import { reduce } from './reduce';
import { joinRecipe } from '../recipes/join-recipe';
import { resolver } from '../utils';

export const join = joinRecipe(reduce, resolver);
