import { AsyncMapper } from '../types';
import { asyncResolver } from '../utils';
import { getToObject } from '../common/get-to-object';
import { reduceAsync } from './reduce-async';
import { AnyIterable } from '../common';

export const toObjectAsync: <T, V, R extends { [key: string]: V }>(
  iterable: AnyIterable<T>,
  keySelector: AsyncMapper<T, keyof R>,
  valueSelector?: AsyncMapper<T, V>,
) => R = getToObject(reduceAsync, asyncResolver);
