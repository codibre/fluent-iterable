import { identity } from '../utils';
import { AnyIterable } from './any-iterable';
import { AsyncReducer } from '../types';

export function getReduce(reduceAndMap: Function) {
  return <T, R>(
    iterable: AnyIterable<T>,
    reducer: AsyncReducer<T, R>,
    initial: R,
  ) => reduceAndMap(iterable, reducer, initial, identity);
}
