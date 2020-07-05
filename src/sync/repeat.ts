import { map } from './map';
import { getRepeat } from '../recipes/get-repeat';
import { empty } from '../utils';
import { concat } from './concat';

export const repeat = getRepeat(map, concat, empty);
