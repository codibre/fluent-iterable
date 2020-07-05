import { reduceAsync } from './reduce-async';
import { getJoin } from '../common/get-join';
import { asyncResolver } from '../utils';

export const joinAsync = getJoin(reduceAsync, asyncResolver);
