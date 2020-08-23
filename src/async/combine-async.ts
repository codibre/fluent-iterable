import { combineRecipe } from '../recipes/combine-recipe';
import { flattenAsync } from './flatten-async';
import { forEachAsync } from './for-each-async';
import { filterAsync } from './filter-async';
import { resolveAndMapIngredientsAsync } from './ingredients-async';

export const combineAsync = combineRecipe({
  ...resolveAndMapIngredientsAsync,
  flatten: flattenAsync,
  forEach: forEachAsync,
  filter: filterAsync,
});
