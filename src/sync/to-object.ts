import { Mapper } from '..';
import { resolver } from '../utils';
import { getToObject } from '../common/get-to-object';
import { reduce } from './reduce';

export const toObject: <T, V, R extends { [key: string]: V }>(
  iterable: Iterable<T>,
  keySelector: Mapper<T, keyof R>,
  valueSelector?: Mapper<T, V>,
) => R = getToObject(reduce, resolver);
