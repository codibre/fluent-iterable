import { resolver } from '../utils';
import { getToObject } from '../recipes/get-to-object';
import { reduce } from './reduce';

export const toObject = getToObject(reduce, resolver);
