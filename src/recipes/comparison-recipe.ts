import { AnyIterable } from '../types-internal';
import { ResolverType, CompareProvider } from '../types-internal';

export function comparisonRecipe(
  count: Function,
  take: Function,
  resolver: ResolverType,
  comparer: CompareProvider,
) {
  return <T>(iterable: AnyIterable<T>, expectedSize: number): any =>
    resolver(count(take(iterable, expectedSize + 1)), comparer(expectedSize));
}
