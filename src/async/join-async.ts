import { AsyncMapper } from '../types';
import { reduceAsync } from './reduce-async';
import { getJoin } from '../common/get-join';
import { AnyIterable } from '../common';
import { asyncResolver } from '../utils';

export const joinAsync: <T>(
  iterable: AnyIterable<T>,
  separator: string,
  mapper?: AsyncMapper<T, string>,
) => string = getJoin(reduceAsync, asyncResolver);