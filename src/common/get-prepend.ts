import { AnyIterable } from '../types-internal';

export function getPrepend(concat: Function): any {
  return <T>(iterable: AnyIterable<T>, item: T) => concat([item], iterable);
}
