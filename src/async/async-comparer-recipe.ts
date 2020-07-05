import { resolverAsync } from '../utils';
import { comparisonRecipe } from '../recipes';
import { countAsync } from './count-async';
import { takeAsync } from './take-async';
import { BinaryComparer } from '../types-internal';

export function asyncCompareRecipe(comparer: BinaryComparer) {
  return comparisonRecipe(countAsync, takeAsync, resolverAsync, comparer);
}
