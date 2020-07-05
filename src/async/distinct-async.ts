import { distinctRecipe } from '../recipes/distinct-recipe';
import { filterAsync } from './filter-async';

export const distinctAsync = distinctRecipe(
  filterAsync,
  async (v, mapper, check) => check(await mapper(v)),
);
