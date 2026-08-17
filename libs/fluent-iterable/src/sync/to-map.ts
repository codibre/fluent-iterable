import { toMapRecipe } from '../recipes';
import { basic } from './basic-ingredients';
import { filter } from './filter';
import { hasLessOrExactly } from './has-less-or-exactly';
import { partition } from './partition';
import { reduce } from './reduce';

export const toMap = toMapRecipe({
  ...basic,
  partition,
  filterOrAll: filter,
  hasLessOrExactly,
  reduce,
});
