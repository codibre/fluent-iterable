import { AnyIterable } from './any-iterable';
import { ResolverType, BinaryComparer } from '../utils';

export function getComparison(
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
