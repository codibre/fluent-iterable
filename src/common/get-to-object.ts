import { identity, ResolverType } from '../utils';
import { AnyIterable } from './any-iterable';
import { AnyMapper } from './any-mapper';

export function getToObject(reduce: Function, resolver: ResolverType) {
  return <T, V, R extends { [key: string]: V }>(
    iterable: AnyIterable<T>,
    keySelector: AnyMapper<T>,
    valueSelector: AnyMapper<T> = identity,
  ): R =>
    reduce(
      iterable,
      (res: any, t: T) =>
        resolver(valueSelector(t), (v) =>
          resolver(keySelector(t), (k) => {
            res[k] = v;
            return res;
          }),
        ),
      {},
    );
}
