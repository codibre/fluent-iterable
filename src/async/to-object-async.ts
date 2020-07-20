import { resolverAsync } from 'augmentative-iterable';
import { toObjectRecipe } from '../recipes';
import { reduceAsync } from './reduce-async';

export const toObjectAsync = toObjectRecipe(reduceAsync, resolverAsync);
