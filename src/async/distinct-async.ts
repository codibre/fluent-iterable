import { distinctRecipe } from '../recipes';
import { filterAsync } from '../async-base/filter-async';

export const distinctAsync = distinctRecipe(
  filterAsync,
  async (v, mapper, check) => check(await mapper(v)),
);
