import { distinctRecipe } from '../recipes/distinct-recipe';
import { filter } from './filter';

export const distinct = distinctRecipe(filter, (v, mapper, check) =>
  check(mapper(v)),
);
