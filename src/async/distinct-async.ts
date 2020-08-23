import { resolverAsync } from 'augmentative-iterable';
import { distinctRecipe, orderedDistinctRecipe } from '../recipes';
import { allAsync } from './all-async';
import { filterAsync } from './filter-async';
import { hasLessOrExactlyAsync } from './has-less-or-exactly-async';
import { mapAsync } from './map-async';
import { partitionAsync } from './partition-async';

function distinctAsyncRecipe(filterOrAll: Function) {
  return distinctRecipe(
    filterOrAll,
    resolverAsync,
    orderedDistinctRecipe({
      map: mapAsync,
      resolver: resolverAsync,
      partition: partitionAsync,
      filterOrAll,
      hasLessOrExactly: hasLessOrExactlyAsync,
    }),
  );
}

export const distinctAsync = distinctAsyncRecipe(filterAsync);
export const isDistinctAsync = distinctAsyncRecipe(allAsync);
