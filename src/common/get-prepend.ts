import { AnyIterable } from './any-iterable';

export function getPrepend(concat: Function): any {
  return <T>(iterable: AnyIterable<T>, item: T) => concat([item], iterable);
}
