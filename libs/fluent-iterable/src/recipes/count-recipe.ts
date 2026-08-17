import { AnyIterable } from 'augmentative-iterable';
import { AnyMapper } from '../types-internal';
import { truth } from '../utils';
import { BasicReduceIngredients } from './ingredients';

export function countRecipe({ reduce, filter }: BasicReduceIngredients) {
  return function <T>(
    this: AnyIterable<T>,
    predicate: AnyMapper<T> = truth,
  ): any {
    return reduce.call(filter.call(this, predicate), (c: number) => c + 1, 0);
  };
}
