import { AnyIterable } from 'augmentative-iterable';
import { AnyMapper } from '../types-internal';
import { prepare } from '../types-internal/prepare';

export function augmentIterableRecipe(augmentIterableAsync: Function) {
  return function <T>(
    this: AnyIterable<T>,
    action: AnyMapper<T>,
  ): AnyIterable<T> {
    return augmentIterableAsync(this, prepare(action));
  };
}
