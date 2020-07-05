import { reduce } from './reduce';
import { getJoin } from '../common/get-join';
import { resolver } from '../utils';

export const join = getJoin(reduce, resolver);
