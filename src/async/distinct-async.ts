import { getDistinct } from '../recipes/get-distinct';
import { filterAsync } from './filter-async';

export const distinctAsync = getDistinct(
  filterAsync,
  async (v, mapper, check) => check(await mapper(v)),
);
