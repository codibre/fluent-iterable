import { distinctRecipe } from '../recipes';
import { allAsync } from './all-async';
import { filterAsync } from './filter-async';
import { hasLessOrExactlyAsync } from './has-less-or-exactly-async';
import { basicAsync } from './basic-ingredients-async';
import { partitionAsync } from './partition-async';
import { Ingredient, ResolverIngredient } from '../recipes/ingredients';

function distinctAsyncRecipe(filterOrAll: Ingredient | ResolverIngredient) {
  return distinctRecipe({
    ...basicAsync,
    partition: partitionAsync,
    filterOrAll,
    hasLessOrExactly: hasLessOrExactlyAsync,
  });
}

export const distinctAsync = distinctAsyncRecipe(filterAsync);
export const isDistinctAsync = distinctAsyncRecipe(allAsync);
