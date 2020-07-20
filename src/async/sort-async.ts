import { sortRecipe } from '../recipes';
import { iterateAsync } from '../utils';
import { toArrayAsync } from './to-array-async';
import { resolverAsync } from 'augmentative-iterable';

export const sortAsync = sortRecipe(toArrayAsync, resolverAsync, iterateAsync);
