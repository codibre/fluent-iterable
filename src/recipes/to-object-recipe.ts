import { identity } from '../utils';
import { AnyIterable, ResolverType } from '../types-internal';
import { AnyMapper } from '../types-internal';

export function toObjectRecipe(reduce: Function, resolver: ResolverType) {
  return function <T, V, R extends { [key: string]: V }>(
    this: AnyIterable<T>,
    keySelector: AnyMapper<T>,
    valueSelector: AnyMapper<T> = identity,
  ): R {
    return reduce.call(
      this,
      (res: any, t: T) =>
        resolver(valueSelector(t), (v) =>
          resolver(keySelector(t), (k) => {
            res[k] = v;
            return res;
          }),
        ),
      {},
    );
  };
}
