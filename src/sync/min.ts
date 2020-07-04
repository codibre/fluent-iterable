import { Mapper } from '../types';
import { getMin } from '../common';
import { top } from './top';

export const min: <T>(
  iterable: Iterable<T>,
  mapper?: Mapper<T, number>,
) => T | undefined = getMin(top);
