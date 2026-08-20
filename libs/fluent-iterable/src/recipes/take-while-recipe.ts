import { AnyIterable } from 'augmentative-iterable';
import { augmentIterableRecipe } from '../recipes';
import { AnyMapper, keepOrderAssuring } from '../types-internal';
import { prepare } from '../types-internal/prepare';

export function takeWhileRecipe(takeWhileIterable: Function) {
  const base = augmentIterableRecipe(takeWhileIterable);

  return function <T>(this: AnyIterable<T>, baseAction: AnyMapper<any>) {
    const action = prepare(baseAction);
    return keepOrderAssuring(base.call(this, action), this);
  };
}
