import { asyncResolver } from '../utils';
import { getToObject } from '../recipes/get-to-object';
import { reduceAsync } from './reduce-async';

export const toObjectAsync = getToObject(reduceAsync, asyncResolver);
