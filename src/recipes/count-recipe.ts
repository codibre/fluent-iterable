import { AnyIterable } from 'augmentative-iterable';
import { truth } from '../utils';
import { BasicReduceIngredients } from './ingredients';

export function countRecipe({ reduce, filter }: BasicReduceIngredients) {
  return function <T>(this: AnyIterable<T>, predicate: any = truth): any {
    return reduce.call(filter.call(this, predicate), (c: number) => c + 1, 0);
  };
}
