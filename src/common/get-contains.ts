import { AnyIterable } from './any-iterable';

export function getContains(any: Function) {
  return <T>(iterable: AnyIterable<T>, item: T) =>
    any(iterable, (next: any) => next === item);
}
