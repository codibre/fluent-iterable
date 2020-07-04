import { getRepeater, AnyIterable } from '../common';

export function getRepeat(map: Function, concat: Function, empty: Function) {
  return <T>(iterable: AnyIterable<T>, n: number): any => {
    if (n >= 1) {
      const repeater = getRepeater<T>();
      return concat(map(iterable, repeater.push), repeater.repeat(n));
    }

    return empty();
  };
}
