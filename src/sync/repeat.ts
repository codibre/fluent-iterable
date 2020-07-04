import { map } from './map';
import { getRepeat } from '../common/get-repeat';
import { empty } from '../utils';
import { concat } from './concat';

export const repeat: <T>(
  iterable: Iterable<T>,
  n: number,
) => Iterable<T> = getRepeat(map, concat, empty);
