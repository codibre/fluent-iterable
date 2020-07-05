import { reduceAsync } from './reduce-async';
import { joinRecipe } from '../recipes';
import { resolverAsync } from '../utils';

export const joinAsync = joinRecipe(reduceAsync, resolverAsync);
