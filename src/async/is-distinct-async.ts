import { resolverAsync } from 'augmentative-iterable';
import { distinctRecipe } from '../recipes';
import { allAsync } from './all-async';

export const isDistinctAsync = distinctRecipe(allAsync, resolverAsync);
