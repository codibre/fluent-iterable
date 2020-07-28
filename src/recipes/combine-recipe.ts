import { AnyIterable, Mapper } from 'augmentative-iterable';
import { ResolverType } from '../types-internal';
import { identity } from '../utils';
import { getMapItems, getMapResult, getMapNN } from './combine-utils';

export function combineRecipe(
  map: Function,
  flatten: Function,
  resolver: ResolverType,
  forEach: Function,
  filter: Function,
) {
  function innerJoin<T, U>(
    itThis: AnyIterable<T>,
    iterable: AnyIterable<U>,
    keyA: Mapper<T, unknown>,
    keyB: Mapper<U, unknown>,
  ) {
    const m = new Map<unknown, U[]>();
    return resolver(forEach.call(iterable, getMapItems(m, keyB)), () =>
      flatten.call(
        filter.call(map.call(itThis, getMapResult(m, keyA)), identity),
      ),
    );
  }
  function combineNN<T, U>(itThis: AnyIterable<T>, iterable: AnyIterable<U>) {
    const cache: U[] = [];
    const mapped = map.call(itThis, (a: T) => [a, iterable]);
    return flatten.call(mapped, getMapNN(cache, map));
  }
  return function <T, U>(
    this: AnyIterable<T>,
    iterable: AnyIterable<U>,
    keyA?: Mapper<T, unknown>,
    keyB?: Mapper<U, unknown>,
  ) {
    if (!keyA === !!keyB) {
      throw new Error('Both key mapper must be informed, or no one');
    }
    return keyA
      ? innerJoin(this, iterable, keyA, keyB!)
      : combineNN(this, iterable);
  };
}
