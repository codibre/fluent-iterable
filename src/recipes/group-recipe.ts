import {
  FunctionAnyMapper,
  isAnyOrderAssured,
  ResolverType,
} from '../types-internal';
import { AnyMapper } from '../types-internal';
import { AnyIterable } from 'augmentative-iterable';
import { map as mapSync } from '../sync/map';
import { GroupIngredients } from './ingredients';
import { orderedOperationRecipe } from './ordered-operation-recipe';
import { prepare } from '../types-internal/prepare';

function distinctKVFactory(distinct: Function) {
  const distinctKeys = new Map<unknown, Set<unknown>>();
  return (k: any, v: any) => {
    let set = distinctKeys.get(k);
    if (!set) {
      set = new Set<unknown>();
      distinctKeys.set(k, set);
    }
    const distinctKey = distinct(v);
    if (!set.has(distinctKey)) {
      set.add(distinctKey);
      return true;
    }
    return false;
  };
}

function orderedGroupRecipe({
  map,
  resolver,
  partition,
  forEach,
}: GroupIngredients) {
  const ordered = orderedOperationRecipe(map, resolver, partition);
  return function <T>(
    this: AnyIterable<T>,
    mapper: FunctionAnyMapper<any>,
    distinct?: FunctionAnyMapper<any>,
  ) {
    const partitioned = ordered.call(this, mapper);
    const distinctKV = distinct ? distinctKVFactory(distinct) : undefined;
    return map.call(partitioned, (part: Iterable<any[]>) => {
      let key!: any;
      const values: any[] = [];
      return resolver(
        forEach.call(part, ([k, v]: any) => {
          key = k;
          if (!distinctKV || distinctKV(key, v)) {
            values.push(v);
          }
        }),
        () => ({ key, values }),
      );
    });
  };
}

function groupItem(g: any, key: any, t: any) {
  const values = g.get(key) || [];
  values.push(t);
  g.set(key, values);
}

function getNonDistinctGroup<T>(
  resolver: ResolverType,
  mapper: FunctionAnyMapper<T>,
) {
  return (g: any, t: any) =>
    resolver(mapper(t), (key) => {
      groupItem(g, key, t);
      return g;
    });
}

function getDistinctGroup<T>(
  resolver: ResolverType,
  mapper: FunctionAnyMapper<T>,
  distinct: FunctionAnyMapper<T>,
) {
  const distinctKV = distinctKVFactory(distinct);
  return (g: any, t: any) =>
    resolver(mapper(t), (key) => {
      if (distinctKV(key, t)) {
        groupItem(g, key, t);
      }
      return g;
    });
}

interface ReduceGroupParameters<T> {
  iterable: AnyIterable<T>;
  reduceAndMap: Function;
  resolver: ResolverType;
  mapper: FunctionAnyMapper<T>;
  distinct: FunctionAnyMapper<T> | undefined;
}

function reduceGroup<T, R>({
  iterable,
  reduceAndMap,
  resolver,
  mapper,
  distinct,
}: ReduceGroupParameters<T>) {
  const reduce = distinct
    ? getDistinctGroup(resolver, mapper, distinct)
    : getNonDistinctGroup<T>(resolver, mapper);
  return reduceAndMap.call(iterable, reduce, new Map<R, T[]>(), (x: any) =>
    x.entries(),
  );
}

export function groupRecipe(ingredients: GroupIngredients) {
  const orderedGroup = orderedGroupRecipe(ingredients);
  const { reduceAndMap, resolver, iterate } = ingredients;
  return function <T>(
    this: AnyIterable<T>,
    baseMapper: AnyMapper<T>,
    baseDistinct?: AnyMapper<T>,
  ) {
    const mapper = prepare(baseMapper);
    const distinct = baseDistinct ? prepare(baseDistinct) : undefined;
    if (isAnyOrderAssured(mapper, this)) {
      return orderedGroup.call(this, mapper, distinct);
    } else {
      const reduced = reduceGroup({
        iterable: this,
        reduceAndMap,
        resolver,
        mapper,
        distinct,
      });

      const resolved = resolver(reduced, (r) =>
        mapSync.call(r, (([key, values]: [any, any]) => ({
          key,
          values,
        })) as any),
      );
      return iterate(resolved);
    }
  };
}
