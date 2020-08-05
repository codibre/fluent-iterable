import { identity } from '../utils';
import { ResolverType } from '../types-internal';

export function avgRecipe(reduceAndMap: Function, resolver: ResolverType) {
  return function <T>(this: Iterable<T>, mapper: any = identity) {
    let div = 0;
    return reduceAndMap.call(
      this,
      (avg: number, x: T) =>
        resolver(mapper(x), (y) => avg + (y - avg) / ++div),
      0,
      (avg: number) => (div ? avg : NaN),
    );
  };
}
