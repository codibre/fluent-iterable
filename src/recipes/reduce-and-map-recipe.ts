import { AnyReducer } from '../types/base';
import { AnyMapper } from '../types-internal';
import { prepare } from '../types-internal/prepare';
import { BasicIngredients } from './ingredients';

export function reduceAndMapRecipe({ forEach, resolver }: BasicIngredients) {
  return function <T, A, R>(
    this: Iterable<T>,
    reducer: AnyReducer<T, A>,
    initial: A,
    baseResult: AnyMapper<A>,
  ): R {
    let accumulator: A = initial;
    const result = prepare(baseResult);
    return resolver(
      forEach.call(this, (t: any) =>
        resolver(reducer(accumulator, t), (r) => (accumulator = r)),
      ),
      () => result(accumulator),
    );
  };
}
