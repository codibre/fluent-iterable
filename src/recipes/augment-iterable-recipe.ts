import { AnyIterable } from 'augmentative-iterable';
import { AsyncAction } from '../types-base';

export function augmentIterableRecipe(augmentIterableAsync: Function) {
  return function <T>(
    this: AnyIterable<T>,
    action: AsyncAction<T>,
  ): AnyIterable<T> {
    return augmentIterableAsync(this, action);
  };
}
