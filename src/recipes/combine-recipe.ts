import { AnyIterable } from '../types-internal';

export function combineRecipe(map: Function, flatten: Function) {
  return function <T, U>(this: AnyIterable<T>, iterable: AnyIterable<U>) {
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
