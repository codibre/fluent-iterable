import { AnyIterable } from '../types-internal';

export function getConcat(flatten: Function) {
  return <T>(...iterables: Array<AnyIterable<T>>) => flatten(iterables);
}
