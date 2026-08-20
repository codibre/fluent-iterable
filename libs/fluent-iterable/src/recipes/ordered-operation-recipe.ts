import { ResolverType } from '../types-internal';
import { AnyMapper } from '../types-internal';
import { AnyIterable } from 'augmentative-iterable';
import { prepare } from '../types-internal/prepare';
import { Ingredient, PartitionIngredient } from './ingredients';

export function orderedOperationRecipe(
  map: Ingredient,
  resolver: ResolverType,
  partition: PartitionIngredient,
) {
  return function <T, R>(this: AnyIterable<T>, baseMapper: AnyMapper<T>) {
    const mapper = prepare(baseMapper);
    const mapped = map.call(this, ((value: T) =>
      resolver(mapper(value), (key) => [key, value])) as any);
    return partition.call(mapped, ([a]: [R], [b]: [R]) => a === b);
  };
}
