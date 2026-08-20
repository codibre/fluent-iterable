import { AnyIterable, Mapper } from 'augmentative-iterable';
import { AnyMapper, ResolverType } from '../types-internal';
import { prepare } from '../types-internal/prepare';
import { identity } from '../utils';
import { CombineIngredients } from './ingredients';

function getMapItems<U>(
  m: Map<unknown, U[]>,
  keyB: (u: U) => unknown,
  resolver: ResolverType,
) {
  return (u: U) =>
    resolver(keyB(u), (key) => {
      let p = m.get(key);
      if (!p) {
        p = [] as U[];
        m.set(key, p);
      }
      p.push(u);
      return m;
    });
}
function getMapResult<T, U>(
  m: Map<unknown, U[]>,
  keyA: Mapper<T, unknown>,
  resolver: ResolverType,
): any {
  return (t: T) =>
    resolver(keyA(t), (key) => {
      const result = m.get(key);
      return result !== undefined ? result.map((u) => [t, u]) : undefined;
    });
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

function getInnerJoin({
  resolver,
  flatten,
  forEach,
  filter,
  map,
}: CombineIngredients) {
  return function <T, U>(
    itThis: AnyIterable<T>,
    iterable: AnyIterable<U>,
    baseKeyA: AnyMapper<T>,
    baseKeyB: AnyMapper<U>,
  ) {
    const keyA = prepare(baseKeyA);
    const keyB = prepare(baseKeyB);
    const m = new Map<unknown, U[]>();
    return resolver(
      forEach.call(iterable, getMapItems(m, keyB, resolver)),
      () =>
        flatten.call(
          filter.call(
            map.call(itThis, getMapResult(m, keyA, resolver)),
            identity,
          ),
        ),
    );
  };
}

export function combineRecipe(combineFuncs: CombineIngredients) {
  const { flatten, map } = combineFuncs;
  const innerJoin = getInnerJoin(combineFuncs);
  const combineNN = getCombineNN(map, flatten);

  return function <T, U>(
    this: AnyIterable<T>,
    iterable: AnyIterable<U>,
    baseKeyA?: AnyMapper<T>,
    baseKeyB?: AnyMapper<U>,
  ): AnyIterable<[T, U]> {
    if (!baseKeyA === !!baseKeyB) {
      throw new Error('Both key mapper must be informed, or no one');
    }
    return baseKeyA
      ? innerJoin(this, iterable, baseKeyA, baseKeyB!)
      : combineNN(this, iterable);
  };
}
