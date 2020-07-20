import { reduce } from './reduce';
import { joinRecipe } from '../recipes';
import { resolver } from 'augmentative-iterable';

export const join = joinRecipe(reduce, resolver);
