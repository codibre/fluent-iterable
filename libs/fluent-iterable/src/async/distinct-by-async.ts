import { distinctByRecipe } from '../recipes';
import { filterAsync } from './filter-async';
import { hasLessOrExactlyAsync } from './has-less-or-exactly-async';
import { basicAsync } from './basic-ingredients-async';
import { partitionAsync } from './partition-async';
import { Ingredient, ResolverIngredient } from '../recipes/ingredients';
import { reduceAsync } from './reduce-async';

function distinctAsyncRecipe(filterOrAll: Ingredient | ResolverIngredient) {
  return distinctByRecipe({
    ...basicAsync,
    partition: partitionAsync,
    filterOrAll,
    hasLessOrExactly: hasLessOrExactlyAsync,
    reduce: reduceAsync,
  });
}

export const distinctByAsync = distinctAsyncRecipe(filterAsync);
