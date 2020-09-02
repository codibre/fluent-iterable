import { resolver } from 'augmentative-iterable';
import { comparisonRecipe } from '../recipes';
import { count } from './count';
import { take } from './take';
import { CompareProvider } from '../types-internal';
import { basic } from './basic-ingredients';

export function getSyncComparer(comparer: CompareProvider) {
  return comparisonRecipe({ ...basic, count, take, resolver, comparer });
}
