import { resolverAsync } from 'augmentative-iterable';
import { comparisonRecipe } from '../recipes';
import { countAsync } from './count-async';
import { takeAsync } from './take-async';
import { CompareProvider } from '../types-internal';

export function asyncCompareRecipe(comparer: CompareProvider) {
  return comparisonRecipe(countAsync, takeAsync, resolverAsync, comparer);
}
