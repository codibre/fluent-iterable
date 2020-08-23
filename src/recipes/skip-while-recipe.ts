import { AsyncPredicate } from '../types';
import { AnyIterable } from 'augmentative-iterable';
import { BasicIngredients } from './ingredients';

export function skipWhileRecipe({ filter, resolver }: BasicIngredients) {
  return function <T>(this: AnyIterable<T>, condition: AsyncPredicate<T>) {
    let found = false;
    return filter.call(this, (t: any) =>
      resolver(condition(t), (r) => (found = found || !r)),
    );
  };
}
