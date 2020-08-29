import { AnyIterable } from 'augmentative-iterable';
import { AnyMapper } from '../types-internal';
import { prepare } from '../types-internal/prepare';
import { BasicIngredients } from './ingredients';

export function executeRecipe({ map, resolver }: BasicIngredients) {
  return function <T>(this: AnyIterable<T>, baseAction: AnyMapper<T>) {
    const action = prepare(baseAction);
    return map.call(this, (x) => resolver(action(x), () => x));
  };
}
