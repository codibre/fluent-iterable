import { identity } from '../utils';
import { AnyIterable } from 'augmentative-iterable';
import { AnyMapper, ResolverType } from '../types-internal';

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

export function distinctRecipe(filterOrAll: Function, resolver: ResolverType) {
  return function distinct<T, R>(
    this: AnyIterable<T>,
    mapper: AnyMapper<T> | number = identity,
    maxOcurrences = 1,
  ) {
    if (typeof mapper === 'number') {
      maxOcurrences = mapper;
      mapper = identity;
    }
    return filterOrAll.call(
      this,
      incPredicate(resolver, mapper, maxOcurrences),
    );
  };
}
