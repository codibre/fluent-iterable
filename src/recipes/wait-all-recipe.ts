import { AsyncMapper } from '../types';
import { AnyIterable } from 'augmentative-iterable';
import { ResolverType } from '../types-internal';

export function waitAllRecipe(forEach: Function, resolver: ResolverType) {
  return function <T, R>(this: AnyIterable<T>, mapper: AsyncMapper<T, R>) {
    const promises: Array<PromiseLike<R> | R> = [];
    const unresolved = forEach.call(this, (x: T) => promises.push(mapper(x)));

    return resolver(unresolved, () => Promise.all(promises));
  };
}
