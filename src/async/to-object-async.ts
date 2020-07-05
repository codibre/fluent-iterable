import { asyncResolver } from '../utils';
import { toObjectRecipe } from '../recipes';
import { reduceAsync } from './reduce-async';

export const toObjectAsync = toObjectRecipe(reduceAsync, asyncResolver);
