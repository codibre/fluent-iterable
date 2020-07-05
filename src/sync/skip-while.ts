import { getSkipWhile } from '../common/get-skip-while';
import { filter } from './filter';
import { resolver } from '../utils';

export const skipWhile = getSkipWhile(filter, resolver);
