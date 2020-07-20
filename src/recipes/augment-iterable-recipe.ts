import { AnyIterable } from 'augmentative-iterable';
import { AsyncAction } from '../types';

export function augmentIterableRecipe(augmentIterableAsync: Function) {
  return function <T>(
    this: AnyIterable<T>,
    action: AsyncAction<T>,
  ): AsyncIterable<T> {
    return augmentIterableAsync(this, action);
  };
}
