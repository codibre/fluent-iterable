import { resolver } from 'augmentative-iterable';
import { toObjectRecipe } from '../recipes';
import { reduce } from './reduce';

export const toObject = toObjectRecipe(reduce, resolver);
