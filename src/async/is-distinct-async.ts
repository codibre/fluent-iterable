import { resolverAsync } from 'augmentative-iterable';
import { distinctRecipe, orderedDistinctRecipe } from '../recipes';
import { allAsync } from './all-async';
import { hasLessOrExactlyAsync } from './has-less-or-exactly-async';
import { mapAsync } from './map-async';
import { partitionAsync } from './partition-async';

export const isDistinctAsync = distinctRecipe(
  allAsync,
  resolverAsync,
  orderedDistinctRecipe(
    mapAsync,
    resolverAsync,
    partitionAsync,
    allAsync,
    hasLessOrExactlyAsync,
  ),
);
