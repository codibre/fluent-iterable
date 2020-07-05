import { distinctRecipe } from '../recipes';
import { filter } from '../sync-base/filter';

export const distinct = distinctRecipe(filter, (v, mapper, check) =>
  check(mapper(v)),
);
