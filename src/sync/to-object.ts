import { resolver } from '../helpers';
import { toObjectRecipe } from '../recipes';
import { reduce } from './reduce';

export const toObject = toObjectRecipe(reduce, resolver);
