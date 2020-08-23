import { identity } from '../utils';
import { AnyIterable } from 'augmentative-iterable';
import { AnyMapper, isOrderAssured, ResolverType } from '../types-internal';
import { DistinctIngredients } from './ingredients';
import { orderedOperationRecipe } from './ordered-operation-recipe';

function inc(map: Map<any, number>, y: any) {
  const result = (map.get(y) || 0) + 1;
  map.set(y, result);

  return result;
}
export function incPredicate<T>(
  resolver: ResolverType,
  mapper: AnyMapper<T>,
  maxOcurrences: number,
): any {
  const map = new Map<any, number>();
  return (x: T) => resolver(mapper(x), (y) => inc(map, y) <= maxOcurrences);
}

function orderedDistinctRecipe({
  map,
  resolver,
  partition,
  filterOrAll,
  hasLessOrExactly,
}: DistinctIngredients) {
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

export function distinctRecipe(ingredients: DistinctIngredients) {
  const ordered = orderedDistinctRecipe(ingredients);
  const { filterOrAll, resolver } = ingredients;

  return function distinct<T, R>(
    this: AnyIterable<T>,
    mapper: AnyMapper<T> | number = identity,
    maxOcurrences = 1,
  ) {
    if (typeof mapper === 'number') {
      maxOcurrences = mapper;
      mapper = identity;
    }
    return isOrderAssured(mapper)
      ? ordered.call(this, mapper, maxOcurrences)
      : filterOrAll.call(this, incPredicate(resolver, mapper, maxOcurrences));
  };
}
