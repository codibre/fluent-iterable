import { reduceAsync } from './reduce-async';
import { joinRecipe } from '../recipes';
import { resolverAsync } from '../helpers';

export const joinAsync = joinRecipe(reduceAsync, resolverAsync);
