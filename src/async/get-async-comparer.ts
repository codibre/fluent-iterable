import { BinaryComparer, resolverAsync } from '../helpers';
import { comparisonRecipe } from '../recipes';
import { countAsync } from './count-async';
import { takeAsync } from './take-async';

export function getAsyncComparer(comparer: BinaryComparer) {
  return comparisonRecipe(countAsync, takeAsync, resolverAsync, comparer);
}
