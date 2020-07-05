import { BinaryComparer, resolver } from '../utils';
import { comparisonRecipe } from '../recipes';
import { count } from './count';
import { take } from './take';

export function getSyncComparer(comparer: BinaryComparer) {
  return comparisonRecipe(count, take, resolver, comparer);
}
