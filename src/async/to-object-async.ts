import { resolverAsync } from '../helpers';
import { toObjectRecipe } from '../recipes';
import { reduceAsync } from './reduce-async';

export const toObjectAsync = toObjectRecipe(reduceAsync, resolverAsync);
