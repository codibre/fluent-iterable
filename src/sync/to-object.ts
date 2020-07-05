import { resolver } from '../utils';
import { getToObject } from '../common/get-to-object';
import { reduce } from './reduce';

export const toObject = getToObject(reduce, resolver);
