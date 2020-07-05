import { reduce } from './reduce';
import { joinRecipe } from '../recipes';
import { resolver } from '../utils';

export const join = joinRecipe(reduce, resolver);
