import { identity } from '../helpers';
import { AnyIterable } from '../types-internal';
import { AsyncReducer } from '../types';

export function reduceRecipe(reduceAndMap: Function) {
  return <T, R>(
    iterable: AnyIterable<T>,
    reducer: AsyncReducer<T, R>,
    initial: R,
  ) => reduceAndMap(iterable, reducer, initial, identity);
}
