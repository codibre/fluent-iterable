import { AsyncMapper } from '../types';
import { identity } from '../helpers';
import { AnyIterable } from '../types-internal';

export function sumRecipe(reduce: Function) {
  return <T>(
    iterable: AnyIterable<T>,
    mapper: AsyncMapper<T, number> = identity as AsyncMapper<T, number>,
  ) => reduce(iterable, (current: any, next: any) => current + mapper(next), 0);
}
