import { identity } from '../utils';
import { AnyIterable } from '../types-internal';
import { AsyncReducer } from '../types';

export function reduceRecipe(reduceAndMap: Function) {
  return function <T, R>(
    this: AnyIterable<T>,
    reducer: AsyncReducer<T, R>,
    initial: R,
  ) {
    return reduceAndMap.call(this, reducer, initial, identity);
  };
}
