import { AnyMapper, ResolverType } from '../types-internal';
import { orderedOperationRecipe } from './ordered-operation-recipe';
import { AnyIterable } from 'augmentative-iterable';

export function orderedDistinctRecipe(
  map: Function,
  resolver: ResolverType,
  partition: Function,
  filterOrAll: Function,
  hasLessOrExactly: Function,
) {
  const ordered = orderedOperationRecipe(map, resolver, partition);
  return function distinct<T>(
    this: AnyIterable<T>,
    mapper: AnyMapper<any>,
    maxOcurrences: number,
  ) {
    const partitioned = ordered.call(this, mapper);
    return filterOrAll.call(partitioned, (part: AnyIterable<any>) =>
      hasLessOrExactly.call(part, maxOcurrences),
    );
  };
}
