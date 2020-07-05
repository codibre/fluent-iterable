import { reduceAsync } from './reduce-async';
import { joinRecipe } from '../recipes/join-recipe';
import { asyncResolver } from '../utils';

export const joinAsync = joinRecipe(reduceAsync, asyncResolver);
