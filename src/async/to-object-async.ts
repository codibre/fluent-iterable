import { asyncResolver } from '../utils';
import { toObjectRecipe } from '../recipes/to-object-recipe';
import { reduceAsync } from './reduce-async';

export const toObjectAsync = toObjectRecipe(reduceAsync, asyncResolver);
