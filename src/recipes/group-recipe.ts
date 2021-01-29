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

function orderedGroupRecipe({
  map,
  resolver,
  partition,
  forEach,
}: GroupIngredients) {
  const ordered = orderedOperationRecipe(map, resolver, partition);
  return function <T>(this: AnyIterable<T>, mapper: FunctionAnyMapper<any>) {
    const partitioned = ordered.call(this, mapper);
    return map.call(partitioned, (part: Iterable<any[]>) => {
      let key!: any;
      const values: any[] = [];
      return resolver(
        forEach.call(part, ([k, v]: any) => {
          key = k;
          values.push(v);
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
  const distinctKeys = new Map<unknown, Set<unknown>>();
  return (g: any, t: any) =>
    resolver(mapper(t), (key) => {
      let set = distinctKeys.get(key);
      if (!set) {
        set = new Set<unknown>();
        distinctKeys.set(key, set);
      }
      const distinctKey = distinct(t);
      if (!set.has(distinctKey)) {
        set.add(distinctKey);
        groupItem(g, key, t);
      }
      return g;
    });
}

function reduceGroup<T, R>(
  iterable: AnyIterable<T>,
  reduceAndMap: Function,
  resolver: ResolverType,
  mapper: FunctionAnyMapper<T>,
  distinct: FunctionAnyMapper<T> | undefined,
) {
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
      return orderedGroup.call(this, mapper);
    } else {
      const reduced = reduceGroup(
        this,
        reduceAndMap,
        resolver,
        mapper,
        distinct,
      );

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
