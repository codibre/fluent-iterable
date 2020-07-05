import { skipWhileRecipe } from '../recipes/skip-while-recipe';
import { filter } from './filter';
import { resolver } from '../utils';

export const skipWhile = skipWhileRecipe(filter, resolver);
