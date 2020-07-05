import { reduce } from './reduce';
import { getJoin } from '../recipes/get-join';
import { resolver } from '../utils';

export const join = getJoin(reduce, resolver);
