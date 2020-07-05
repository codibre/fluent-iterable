import { filter } from './filter';
import { reduce } from './reduce';
import { getCount } from '../common/get-count';

export const count = getCount(reduce, filter);
