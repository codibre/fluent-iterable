import { resolverAsync } from 'augmentative-iterable';
import { distinctRecipe } from '../recipes';
import { filterAsync } from './filter-async';

export const distinctAsync = distinctRecipe(filterAsync, resolverAsync);
