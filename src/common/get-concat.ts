import { AnyIterable } from './any-iterable';

export function getConcat(flatten: Function) {
  return <T>(...iterables: Array<AnyIterable<T>>) => flatten(iterables);
}
