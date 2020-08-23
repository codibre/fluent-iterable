import { distinctRecipe } from '../recipes';
import { allAsync } from './all-async';
import { filterAsync } from './filter-async';
import { hasLessOrExactlyAsync } from './has-less-or-exactly-async';
import { resolveAndMapIngredientsAsync } from './ingredients-async';
import { partitionAsync } from './partition-async';

function distinctAsyncRecipe(filterOrAll: Function) {
  return distinctRecipe({
    ...resolveAndMapIngredientsAsync,
    partition: partitionAsync,
    filterOrAll,
    hasLessOrExactly: hasLessOrExactlyAsync,
  });
}

export const distinctAsync = distinctAsyncRecipe(filterAsync);
export const isDistinctAsync = distinctAsyncRecipe(allAsync);
