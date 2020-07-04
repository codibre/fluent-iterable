import { AsyncMapper } from '../types';
import { identity } from '../utils';
import { AnyIterable } from './any-iterable';

export function getSum(reduce: Function) {
  return <T>(
    iterable: AnyIterable<T>,
    mapper: AsyncMapper<T, number> = identity as AsyncMapper<T, number>,
  ) => reduce(iterable, (current: any, next: any) => current + mapper(next), 0);
}
