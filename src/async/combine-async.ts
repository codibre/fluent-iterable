import { combineRecipe } from '../recipes/combine-recipe';
import { flattenAsync } from './flatten-async';
import { forEachAsync } from './for-each-async';
import { filterAsync } from './filter-async';
import { basicAsync } from './basic-ingredients-async';

export const combineAsync = combineRecipe({
  ...basicAsync,
  flatten: flattenAsync,
  forEach: forEachAsync,
  filter: filterAsync,
});
