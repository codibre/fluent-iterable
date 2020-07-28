import { AnyIterable, Mapper } from 'augmentative-iterable';
import { ResolverType } from '../types-internal';
import { identity } from '../utils';

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
    return resolver(
      forEach.call(iterable, (u: U) => {
        const key = keyB(u);
        let p = m.get(key);
        if (!p) {
          p = [] as U[];
          m.set(key, p);
        }
        p.push(u);
        return m;
      }),
      () =>
        flatten.call(
          filter.call(
            map.call(itThis, (t: T) => {
              const result = m.get(keyA(t));
              return result ? result.map((u) => [t, u]) : undefined;
            }),
            identity,
          ),
        ),
    );
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
    if (keyA) {
      return innerJoin(this, iterable, keyA, keyB!);
    }
    const cache: U[] = [];
    const mapped = map.call(this, (a: T) => [a, iterable]);
    return flatten.call(mapped, ([a, bIt]: [T, AnyIterable<U>]) =>
      cache.length > 0
        ? map.call(cache, (b: U) => [a, b])
        : map.call(bIt, (b: U) => {
            cache.push(b);
            return [a, b];
          }),
    );
  };
}
