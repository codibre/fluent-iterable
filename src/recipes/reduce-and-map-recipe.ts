import { Mapper } from '../types';
import { Reducer } from '../types-base';
import { BasicIngredients } from './ingredients';

export function reduceAndMapRecipe({ forEach, resolver }: BasicIngredients) {
  return function <T, A, R>(
    this: Iterable<T>,
    reducer: Reducer<T, A>,
    initial: A,
    result: Mapper<A, R>,
  ): R {
    let accumulator: A = initial;
    return resolver(
      forEach.call(this, (t: any) =>
        resolver(reducer(accumulator, t), (r) => (accumulator = r)),
      ),
      () => result(accumulator),
    );
  };
}
