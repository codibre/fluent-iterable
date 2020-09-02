import { AnyIterable } from 'augmentative-iterable';
import { FunctionAnyMapper } from '../types-internal';
import { BasicIngredients } from './ingredients';

export function executeRecipe({ map, resolver }: BasicIngredients) {
  return function <T>(this: AnyIterable<T>, action: FunctionAnyMapper<T>) {
    return map.call(this, (x) => resolver(action(x), () => x));
  };
}
