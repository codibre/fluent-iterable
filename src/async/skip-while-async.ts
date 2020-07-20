import { skipWhileRecipe } from '../recipes';
import { filterAsync } from './filter-async';
import { resolverAsync } from 'augmentative-iterable';

export const skipWhileAsync = skipWhileRecipe(filterAsync, resolverAsync);
