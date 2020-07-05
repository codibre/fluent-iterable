import { AnyIterable, ResolverType } from '../types-internal';

export async function toArrayRecipe(forEach: Function, resolver: ResolverType) {
  return <T>(iterable: AnyIterable<T>) => {
    const array: T[] = [];
    const result = forEach(iterable, array.push.bind(array));

    return resolver(result, (c: T) => array);
  };
}
