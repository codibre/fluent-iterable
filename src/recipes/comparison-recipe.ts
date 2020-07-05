import { AnyIterable } from '../types-internal';
import { ResolverType, BinaryComparer } from '../helpers';

export function comparisonRecipe(
  count: Function,
  take: Function,
  resolver: ResolverType,
  comparer: BinaryComparer,
) {
  return <T>(iterable: AnyIterable<T>, expectedSize: number): any =>
    resolver(count(take(iterable, expectedSize + 1)), (t) =>
      comparer(t, expectedSize),
    );
}
