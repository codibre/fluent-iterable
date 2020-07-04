import { AnyIterable } from '../common/any-iterable';
import { AsyncMapper } from '../types';
import { getMin } from '../common';
import { topAsync } from './top-async';

export const minAsync: <T>(
  iterable: AnyIterable<T>,
  mapper?: AsyncMapper<T, number>,
) => Promise<T | undefined> = getMin(topAsync);
