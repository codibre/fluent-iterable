import { resolverAsync } from 'augmentative-iterable';
import { partitionRecipe } from '../recipes/partition-recipe';

export const partitionAsync = partitionRecipe(
  Symbol.asyncIterator,
  resolverAsync,
);
