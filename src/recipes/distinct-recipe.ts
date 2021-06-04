import { identity } from '../utils';
import { AnyIterable } from 'augmentative-iterable';
import {
  AnyMapper,
  FunctionAnyMapper,
  isAnyOrderAssured,
  ResolverType,
} from '../types-internal';
import { DistinctIngredients } from './ingredients';
import { orderedOperationRecipe } from './ordered-operation-recipe';
import { prepare } from '../types-internal/prepare';
import { Choose } from '../types';

function inc(map: Map<any, number>, y: any) {
  const result = (map.get(y) || 0) + 1;
  map.set(y, result);

  return result;
}
export function incPredicate<T>(
  resolver: ResolverType,
  mapper: FunctionAnyMapper<T>,
  maxOcurrences: number,
): any {
  const map = new Map<any, number>();
  return (x: T) => resolver(mapper(x), (y) => inc(map, y) <= maxOcurrences);
}

const nonChosen = Symbol('nonChosen');

function orderedDistinctRecipe({
  map,
  resolver,
  partition,
  filterOrAll,
  hasLessOrExactly,
  reduce,
}: DistinctIngredients) {
  const ordered = orderedOperationRecipe(map, resolver, partition);
  return function distinct<T>(
    this: AnyIterable<T>,
    mapper: FunctionAnyMapper<any>,
    choose: Choose<T> | unknown,
    maxOcurrences: number,
  ) {
    const partitioned = map.call(ordered.call(this, mapper), (x) =>
      map.call(x, (y) => y[1]),
    );
    if (typeof choose === 'function') {
      return map.call(partitioned, (x) =>
        reduce.call(
          x,
          (acc: any, y) => {
            return acc === nonChosen ? y : choose(acc, y);
          },
          nonChosen,
        ),
      );
    }
    return filterOrAll.call(partitioned, (part: AnyIterable<any>) =>
      hasLessOrExactly.call(part, maxOcurrences),
    );
  };
}

function chooseDistinctRecipe({ forEach, resolver }: DistinctIngredients) {
  return function distinct<T>(
    this: AnyIterable<T>,
    mapper: FunctionAnyMapper<any>,
    choose: Choose<T>,
  ) {
    const map = new Map();
    return resolver(
      forEach.call(this, (x) => {
        const k = mapper(x);
        const old = map.get(k);
        const newOne = old === undefined ? x : choose(old, x);
        if (old !== newOne) {
          map.set(k, newOne);
        }
      }),
      () => map.values(),
    );
  };
}

export function distinctRecipe(ingredients: DistinctIngredients) {
  const ordered = orderedDistinctRecipe(ingredients);
  const choose = chooseDistinctRecipe(ingredients);
  const { filterOrAll, resolver } = ingredients;

  return function distinct<T, R>(
    this: AnyIterable<T>,
    baseMapper: AnyMapper<T> | number = identity,
    maxOcurrencesOrChoose?: number | Choose<T>,
    maxOcurrences = 1,
  ) {
    const typeCheck = typeof maxOcurrencesOrChoose;
    if (typeof baseMapper === 'number') {
      maxOcurrences = baseMapper;
      baseMapper = identity;
    } else if (typeCheck === 'number') {
      maxOcurrences = maxOcurrencesOrChoose as number;
    }
    const mapper = prepare(baseMapper);
    if (isAnyOrderAssured(mapper, this)) {
      return ordered.call(
        this,
        mapper,
        maxOcurrencesOrChoose as Choose<unknown>,
        maxOcurrences,
      );
    }
    if (typeCheck !== 'function') {
      return filterOrAll.call(
        this,
        incPredicate(resolver, mapper, maxOcurrences),
      );
    }

    return choose.call(this, mapper, maxOcurrencesOrChoose as Choose<unknown>);
  };
}
