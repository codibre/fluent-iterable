import { reduceAsync } from './reduce-async';
import { getJoin } from '../recipes/get-join';
import { asyncResolver } from '../utils';

export const joinAsync = getJoin(reduceAsync, asyncResolver);
