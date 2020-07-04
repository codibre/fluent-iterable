import { AsyncMapper } from '../types';
import { getDistinct } from '../common/get-distinct';
import { filterAsync } from './filter-async';

export const distinctAsync: <T, R>(
  iterable: Iterable<T>,
  mapper?: AsyncMapper<T, R>,
) => Iterable<T> = getDistinct(filterAsync, async (v, mapper, check) =>
  check(await mapper(v)),
);
