import { AnyIterable, Mapper } from 'augmentative-iterable';
import { ResolverType } from '../types-internal';
import { identity } from '../utils';

function getMapItems<U>(m: Map<unknown, U[]>, keyB: (u: U) => unknown) {
  return (u: U) => {
    const key = keyB(u);
    let p = m.get(key);
    if (!p) {
      p = [] as U[];
      m.set(key, p);
    }
    p.push(u);
    return m;
  };
}
function getMapResult<T, U>(
  m: Map<unknown, U[]>,
  keyA: Mapper<T, unknown>,
): any {
  return (t: T) => {
    const result = m.get(keyA(t));
    return result ? result.map((u) => [t, u]) : undefined;
  };
}
function getMapNN<T, U>(cache: U[], map: Function): any {
  return ([a, bIt]: [T, AnyIterable<U>]) =>
    cache.length > 0
      ? map.call(cache, (b: U) => [a, b])
      : map.call(bIt, (b: U) => {
          cache.push(b);
          return [a, b];
        });
}

function getCombineNN(map: Function, flatten: Function) {
  return function <T, U>(itThis: AnyIterable<T>, iterable: AnyIterable<U>) {
    const cache: U[] = [];
    const mapped = map.call(itThis, (a: T) => [a, iterable]);
    return flatten.call(mapped, getMapNN(cache, map));
  };
}

interface CombineFuncs {
  resolver: ResolverType;
  flatten: Function;
  forEach: Function;
  filter: Function;
  map: Function;
}

function getInnerJoin({
  resolver,
  flatten,
  forEach,
  filter,
  map,
}: CombineFuncs) {
  return function <T, U>(
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
  };
}

export function combineRecipe(combineFuncs: CombineFuncs) {
  const { flatten, map } = combineFuncs;
  const innerJoin = getInnerJoin(combineFuncs);
  const combineNN = getCombineNN(map, flatten);

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
