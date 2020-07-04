import { AnyIterable } from './any-iterable';

export function getTakeCount(count: Function, take: Function) {
  return <T>(iterable: AnyIterable<T>, expectedSize: number): any =>
    count(take(iterable, expectedSize + 1));
}
