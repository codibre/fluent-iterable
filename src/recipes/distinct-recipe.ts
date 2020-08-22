import { assureOrder, identity } from '../utils';
import { AnyIterable } from 'augmentative-iterable';
import { AnyMapper, isOrderAssured, ResolverType } from '../types-internal';

interface Checker {
  (value: any): boolean;
}

export function distinctRecipe(
  filterOrAll: Function,
  resolver: ResolverType,
  ordered: Function,
) {
  return function distinct<T, R>(
    this: AnyIterable<T>,
    mapper: AnyMapper<T> = identity,
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
