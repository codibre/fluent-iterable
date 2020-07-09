import { AsyncMapper } from '../types';
import { identity } from '../utils';
import { AnyIterable } from '../types-internal';

export function waitAllRecipe(forEach: Function, resolver: Function) {
  return <T, R>(iterable: AnyIterable<T>, mapper: AsyncMapper<T, R>) => {
    const promises: Array<PromiseLike<R> | R> = [];
    const unresolved = forEach(iterable, (x: T) => promises.push(mapper(x)));

    return resolver(unresolved, () => Promise.all(promises));
  };
}
