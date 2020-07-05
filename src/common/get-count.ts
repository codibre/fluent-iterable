import { AnyIterable } from '../types-internal';
import { truth } from '../utils';

export function getCount(reduce: Function, filter: Function) {
  return <T>(iterable: AnyIterable<T>, predicate: any = truth): any =>
    reduce(filter(iterable, predicate), (c: number) => c + 1, 0);
}
