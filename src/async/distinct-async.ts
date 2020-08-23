import { distinctRecipe } from '../recipes';
import { allAsync } from './all-async';
import { filterAsync } from './filter-async';
import { hasLessOrExactlyAsync } from './has-less-or-exactly-async';
import { resolveAndMapIngredients } from './ingredients-async';
import { partitionAsync } from './partition-async';

function distinctAsyncRecipe(filterOrAll: Function) {
  return distinctRecipe({
    ...resolveAndMapIngredients,
    partition: partitionAsync,
    filterOrAll,
    hasLessOrExactly: hasLessOrExactlyAsync,
  });
}

export const distinctAsync = distinctAsyncRecipe(filterAsync);
export const isDistinctAsync = distinctAsyncRecipe(allAsync);
