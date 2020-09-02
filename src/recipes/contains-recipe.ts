import { AnyIterable } from 'augmentative-iterable';
import { ResolverIngredient } from './ingredients';

export function containsRecipe(any: ResolverIngredient) {
  return function <T>(this: AnyIterable<T>, item: T) {
    return any.call(this, (next: any) => next === item);
  };
}
