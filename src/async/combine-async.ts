import { combineRecipe } from '../recipes/combine-recipe';
import { flattenAsync } from './flatten-async';
import { forEachAsync } from './for-each-async';
import { filterAsync } from './filter-async';
import { resolveAndMapIngredients } from './ingredients-async';

export const combineAsync = combineRecipe({
  ...resolveAndMapIngredients,
  flatten: flattenAsync,
  forEach: forEachAsync,
  filter: filterAsync,
});
