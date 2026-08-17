import { AnyIterable } from 'augmentative-iterable';
import { AnyMapper } from '../types-internal';
import { prepare } from '../types-internal/prepare';

export function forEachRecipe(augmentativeForEach: Function) {
  return function <T>(this: AnyIterable<T>, action: AnyMapper<T>) {
    return augmentativeForEach.call(this, prepare(action));
  };
}
