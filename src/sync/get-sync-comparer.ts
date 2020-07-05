import { resolver } from '../utils';
import { comparisonRecipe } from '../recipes';
import { count } from './count';
import { take } from './take';
import { BinaryComparer } from '../types-internal';

export function getSyncComparer(comparer: BinaryComparer) {
  return comparisonRecipe(count, take, resolver, comparer);
}
