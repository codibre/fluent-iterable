import { skipWhileRecipe } from '../recipes';
import { filter } from './filter';
import { resolver } from '../helpers';

export const skipWhile = skipWhileRecipe(filter, resolver);
