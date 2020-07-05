import { reduce } from './reduce';
import { joinRecipe } from '../recipes';
import { resolver } from '../helpers';

export const join = joinRecipe(reduce, resolver);
