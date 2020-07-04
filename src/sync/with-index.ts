import { Indexed } from '../types';
import { getWithIndex } from '../common/get-with-index';
import { map } from './map';

export const withIndex: <T>(
  iterable: Iterable<T>,
) => Iterable<Indexed<T>> = getWithIndex(map);
