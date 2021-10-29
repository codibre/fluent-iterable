import { AnyIterable } from 'augmentative-iterable';
import { BasicIngredients } from './ingredients';
import { AnyMapper } from '../types-internal';
import { prepare } from '../types-internal/prepare';

export function skipWhileRecipe({ filter, resolver }: BasicIngredients) {
  return function <T>(this: AnyIterable<T>, baseCondition: AnyMapper<T>) {
    let found = false;
    const condition = prepare(baseCondition);
    return filter.call(this, (t: any) =>
      resolver(condition(t), (r) => (found = found || !r)),
    );
  };
}
