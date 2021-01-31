import { AnyIterable, itClone } from 'augmentative-iterable';
import { AnyMapper, orderAssured } from '../types-internal';
import { prepare } from '../types-internal/prepare';
import { assureOrder } from '../utils';

export function augmentIterableRecipe(
  augmentIterable: Function,
  clone?: boolean,
) {
  if (clone) {
    return function <T>(
      this: AnyIterable<T>,
      action: AnyMapper<T>,
    ): AnyIterable<T> {
      return augmentIterable(
        (this as any)[orderAssured] ? itClone(this) : this,
        prepare(action),
      );
    };
  }

  return function <T>(
    this: AnyIterable<T>,
    action: AnyMapper<T>,
  ): AnyIterable<T> {
    return augmentIterable(this, prepare(action));
  };
}
