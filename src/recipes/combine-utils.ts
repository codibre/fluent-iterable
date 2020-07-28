import { AnyIterable, Mapper } from 'augmentative-iterable';
export function getMapItems<U>(m: Map<unknown, U[]>, keyB: (u: U) => unknown) {
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
export function getMapResult<T, U>(
  m: Map<unknown, U[]>,
  keyA: Mapper<T, unknown>,
): any {
  return (t: T) => {
    const result = m.get(keyA(t));
    return result ? result.map((u) => [t, u]) : undefined;
  };
}
export function getMapNN<T, U>(cache: U[], map: Function): any {
  return ([a, bIt]: [T, AnyIterable<U>]) =>
    cache.length > 0
      ? map.call(cache, (b: U) => [a, b])
      : map.call(bIt, (b: U) => {
          cache.push(b);
          return [a, b];
        });
}
