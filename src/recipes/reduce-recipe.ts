import { identity } from '../utils';
import { AnyIterable } from 'augmentative-iterable';
import { AsyncReducer } from '../types/base';
import { ReduceAndMapIngredient } from './ingredients';

export function reduceRecipe(reduceAndMap: ReduceAndMapIngredient) {
  return function <T, R>(
    this: AnyIterable<T>,
    reducer: AsyncReducer<T, R>,
    initial: R,
  ) {
    return reduceAndMap.call(this, reducer, initial, identity);
  };
}
