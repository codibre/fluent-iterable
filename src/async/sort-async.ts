import { sortRecipe } from '../recipes';
import { resolverAsync, iterateAsync } from '../helpers';
import { toArrayAsync } from './to-array-async';

export const sortAsync = sortRecipe(toArrayAsync, resolverAsync, iterateAsync);
