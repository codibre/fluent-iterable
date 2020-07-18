import { distinctRecipe } from '../recipes';
import { filterAsync } from './filter-async';

export const distinctAsync = distinctRecipe(
  filterAsync,
  async (v, mapper, check) => check(await mapper(v)),
);
