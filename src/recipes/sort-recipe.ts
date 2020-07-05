import { ResolverType } from '../helpers';
import { Comparer } from '../types';

export function sortRecipe(
  toArray: Function,
  resolver: ResolverType,
  iterate: Function,
) {
  return <T>(iterable: Iterable<T>, comparer?: Comparer<T>) =>
    iterate(resolver(toArray(iterable), (b) => b.sort(comparer)));
}
