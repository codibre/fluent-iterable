import { resolverAsync } from 'augmentative-iterable';
import { distinctRecipe, orderedDistinctRecipe } from '../recipes';
import { filterAsync } from './filter-async';
import { hasLessOrExactlyAsync } from './has-less-or-exactly-async';
import { mapAsync } from './map-async';
import { partitionAsync } from './partition-async';

export const distinctAsync = distinctRecipe(
  filterAsync,
  resolverAsync,
  orderedDistinctRecipe({
    map: mapAsync,
    resolver: resolverAsync,
    partition: partitionAsync,
    filterOrAll: filterAsync,
    hasLessOrExactly: hasLessOrExactlyAsync,
  }),
);
