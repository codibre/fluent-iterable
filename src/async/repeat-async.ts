import { mapAsync } from './map-async';
import { getRepeat } from '../recipes/get-repeat';
import { asyncEmpty } from '../utils';
import { concatAsync } from './concat-async';

export const repeatAsync = getRepeat(mapAsync, concatAsync, asyncEmpty);
