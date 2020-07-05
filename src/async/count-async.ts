import { getCount } from '../common/get-count';
import { reduceAsync } from './reduce-async';
import { filterAsync } from './filter-async';

export const countAsync = getCount(reduceAsync, filterAsync);
