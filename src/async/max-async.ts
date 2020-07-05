import { AsyncMapper } from '../types';
import { AnyIterable } from '../types-internal';
import { getMax } from '../recipes';
import { topAsync } from './top-async';

export const maxAsync: <T>(
  iterable: AnyIterable<T>,
  mapper?: AsyncMapper<T, number>,
) => Promise<T | undefined> = getMax(topAsync);
