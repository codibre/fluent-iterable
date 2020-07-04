import { AnyIterable } from './any-iterable';

export function getAppend(concat: Function): any {
  return <T>(iterable: AnyIterable<T>, item: T) => concat(iterable, [item]);
}
