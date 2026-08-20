import { truth } from '../utils';
import { AnyIterable } from 'augmentative-iterable';
import { BasicIngredients } from './ingredients';

export function lastRecipe({ forEach, resolver, filter }: BasicIngredients) {
  return function <T>(this: AnyIterable<T>, predicate: any = truth) {
    let result: T | undefined;
    return resolver(
      forEach.call(filter.call(this, predicate), (last: T) => (result = last)),
      () => result,
    );
  };
}
