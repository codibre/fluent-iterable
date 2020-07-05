import { getSkipWhile } from '../recipes/get-skip-while';
import { filterAsync } from './filter-async';
import { asyncResolver } from '../utils';

export const skipWhileAsync = getSkipWhile(filterAsync, asyncResolver);
