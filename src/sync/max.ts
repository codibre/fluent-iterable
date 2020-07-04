import { Mapper } from '../types';
import { getMax } from '../common';
import { top } from './top';

export const max: <T>(
  iterable: Iterable<T>,
  mapper?: Mapper<T, number>,
) => T | undefined = getMax(top);
