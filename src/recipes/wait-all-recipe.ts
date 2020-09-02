import { AsyncMapper } from '../types';
import { AnyIterable } from 'augmentative-iterable';
import { BasicIngredients } from './ingredients';
import { AnyMapper } from '../types-internal';
import { prepare } from '../types-internal/prepare';

export function waitAllRecipe({ forEach, resolver }: BasicIngredients) {
  return function <T, R>(this: AnyIterable<T>, baseMapper: AnyMapper<T>) {
    const promises: Array<PromiseLike<R> | R> = [];
    const mapper = prepare(baseMapper);
    const unresolved = forEach.call(this, (x: T) => promises.push(mapper(x)));

    return resolver(unresolved, () => Promise.all(promises));
  };
}
