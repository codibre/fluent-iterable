import { resolver } from '../utils';
import { comparisonRecipe } from '../recipes';
import { count } from './count';
import { take } from './take';
import { CompareProvider } from '../types-internal';

export function getSyncComparer(comparer: CompareProvider) {
  return comparisonRecipe(count, take, resolver, comparer);
}
