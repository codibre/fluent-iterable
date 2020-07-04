import { AnyIterable } from './any-iterable';

export function getTake(takeWhile: Function) {
  return <T>(iterable: AnyIterable<T>, n: number): Iterable<T> => {
    let counter = 0;
    return takeWhile(iterable, () => counter++ < n);
  };
}
