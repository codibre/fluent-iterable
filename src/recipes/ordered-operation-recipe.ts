import { ResolverType } from '../types-internal';
import { AnyMapper } from '../types-internal';
import { AnyIterable } from 'augmentative-iterable';

export function orderedOperationRecipe(
  map: Function,
  resolver: ResolverType,
  partition: Function,
) {
  return function <T, R>(this: AnyIterable<T>, mapper: AnyMapper<T>) {
    const mapped = map.call(this, ((value: T) =>
      resolver(mapper(value), (key) => [key, value])) as any);
    return partition.call(mapped, ([a]: [R], [b]: [R]) => a === b);
  };
}
