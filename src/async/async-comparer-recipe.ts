import { resolverAsync } from 'augmentative-iterable';
import { comparisonRecipe } from '../recipes';
import { countAsync } from './count-async';
import { takeAsync } from './take-async';
import { CompareProvider } from '../types-internal';
import { basicAsync } from './basic-ingredients-async';

export function asyncCompareRecipe(comparer: CompareProvider) {
  return comparisonRecipe({
    ...basicAsync,
    count: countAsync,
    take: takeAsync,
    resolver: resolverAsync,
    comparer,
  });
}
