import { skipWhileRecipe } from '../recipes';
import { filter } from '../sync-base/filter';
import { resolver } from '../utils';

export const skipWhile = skipWhileRecipe(filter, resolver);
