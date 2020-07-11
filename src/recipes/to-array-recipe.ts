import { AnyIterable, ResolverType } from '../types-internal';

export function toArrayRecipe(forEach: Function, resolver: ResolverType) {
  return function <T>(this: AnyIterable<T>) {
    const array: T[] = [];
    const result = forEach.call(this, array.push.bind(array));

    return resolver(result, (c: T) => array);
  };
}
