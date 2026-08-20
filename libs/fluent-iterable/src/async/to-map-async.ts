import { toMapRecipe } from '../recipes';
import { filterAsync } from './filter-async';
import { hasLessOrExactlyAsync } from './has-less-or-exactly-async';
import { basicAsync } from './basic-ingredients-async';
import { partitionAsync } from './partition-async';
import { reduceAsync } from './reduce-async';

export const toMapAsync = toMapRecipe({
  ...basicAsync,
  partition: partitionAsync,
  filterOrAll: filterAsync,
  hasLessOrExactly: hasLessOrExactlyAsync,
  reduce: reduceAsync,
});
