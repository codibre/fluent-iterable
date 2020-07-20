import { reduceAsync } from './reduce-async';
import { joinRecipe } from '../recipes';
import { resolverAsync } from 'augmentative-iterable';

export const joinAsync = joinRecipe(reduceAsync, resolverAsync);
