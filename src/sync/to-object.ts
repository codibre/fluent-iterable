import { resolver } from '../utils';
import { toObjectRecipe } from '../recipes/to-object-recipe';
import { reduce } from './reduce';

export const toObject = toObjectRecipe(reduce, resolver);
