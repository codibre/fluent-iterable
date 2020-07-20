import { AnyIterable } from 'augmentative-iterable';
import { ResolverType, CompareProvider } from '../types-internal';

export function comparisonRecipe(
  count: Function,
  take: Function,
  resolver: ResolverType,
  comparer: CompareProvider,
) {
  return function <T>(this: AnyIterable<T>, expectedSize: number): any {
    const counted = count.call(take.call(this, expectedSize + 1));
    return resolver(counted, comparer(expectedSize));
  };
}
