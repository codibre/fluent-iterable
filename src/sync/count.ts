import { filter } from './filter';
import { reduce } from './reduce';
import { getCount } from '../recipes/get-count';

export const count = getCount(reduce, filter);
