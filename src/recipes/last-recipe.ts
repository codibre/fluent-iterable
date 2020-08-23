import { truth } from '../utils';
import { AnyIterable } from 'augmentative-iterable';
import { BasicReduceIngredients } from './ingredients';

export function lastRecipe({ reduce, resolver }: BasicReduceIngredients) {
  return function <T>(this: AnyIterable<T>, predicate: any = truth) {
    return reduce.call(
      this,
      (current: T, t: T) =>
        resolver(predicate(t), (next) => (next ? t : current)),
      undefined as T | undefined,
    );
  };
}
