import { skipWhileRecipe } from '../recipes';
import { filter } from './filter';
import { resolver } from '../utils';

export const skipWhile = skipWhileRecipe(filter, resolver);
