import { mapAsync } from './map-async';
import { getRepeat } from '../common/get-repeat';
import { asyncEmpty } from '../utils';
import { concatAsync } from './concat-async';
import { AnyIterable } from '../common';

export const repeatAsync: <T>(
  iterable: AnyIterable<T>,
  n: number,
) => AsyncIterable<T> = getRepeat(mapAsync, concatAsync, asyncEmpty);
