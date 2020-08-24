import { AnyIterable } from 'augmentative-iterable';
import { AsyncAction } from '..';
import { augmentIterableRecipe } from '../recipes';
import { keepOrderAssuring } from '../types-internal';

export function takeWhileRecipe(takeWhileIterable: Function) {
  const base = augmentIterableRecipe(takeWhileIterable);

  return function <T>(this: AnyIterable<T>, action: AsyncAction<any>) {
    return keepOrderAssuring(base.call(this, action), this);
  };
}
