import { asyncResolver } from '../utils';
import { getToObject } from '../common/get-to-object';
import { reduceAsync } from './reduce-async';

export const toObjectAsync = getToObject(reduceAsync, asyncResolver);
