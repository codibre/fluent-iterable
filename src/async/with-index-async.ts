import { Indexed } from '../types';
import { AnyIterable } from '../common';
import { getWithIndex } from '../common/get-with-index';
import { mapAsync } from './map-async';

export const withIndexAsync: <T>(
  iterable: AnyIterable<T>,
) => AsyncIterable<Indexed<T>> = getWithIndex(mapAsync);
