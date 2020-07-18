import { distinctRecipe } from '../recipes';
import { filter } from './filter';

export const distinct = distinctRecipe(filter, (v, mapper, check) =>
  check(mapper(v)),
);
