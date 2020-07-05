import { reduceAsync } from './reduce-async';
import { joinRecipe } from '../recipes';
import { asyncResolver } from '../utils';

export const joinAsync = joinRecipe(reduceAsync, asyncResolver);
