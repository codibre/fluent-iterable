import { Comparer } from '../types';
import { ResolverType, Iterate } from '../types-internal';

export function sortRecipe(
  toArray: Function,
  resolver: ResolverType,
  iterate: Iterate,
) {
  return function <T>(this: Iterable<T>, comparer?: Comparer<T>) {
    return iterate(resolver(toArray.call(this), (b) => b.sort(comparer)));
  };
}
