import { getTakeCount } from '../common';
import { count } from './count';
import { take } from './take';

export const takeCount = getTakeCount(count, take);
