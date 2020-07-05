import { AnyIterable } from '../types-internal';

function* repeat<T>(times: number, cache: T[]) {
  for (let i = 1; i < times; ++i) {
    yield* cache;
  }
}

export function repeatRecipe(map: Function, concat: Function, empty: Function) {
  return <T>(iterable: AnyIterable<T>, n: number): any => {
    if (n >= 1) {
      const cache: T[] = [];
      return concat(
        map(iterable, (value: T) => {
          cache.push(value);
          return value;
        }),
        repeat(n, cache),
      );
    }

    return empty();
  };
}
