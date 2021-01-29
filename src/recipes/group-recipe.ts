import {
  FunctionAnyMapper,
  isAnyOrderAssured,
  ResolverType,
} from '../types-internal';
import { AnyMapper } from '../types-internal';
import { AnyIterable } from 'augmentative-iterable';
import { map as mapSync } from '../sync/map';
import { GroupIngredients, IterateIngredient } from './ingredients';
import { orderedOperationRecipe } from './ordered-operation-recipe';
import { prepare } from '../types-internal/prepare';

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
    transformValue: Function,
  ) {
    const partitioned = ordered.call(this, mapper);
    return map.call(partitioned, (part: Iterable<any[]>) => {
      let key!: any;
      const values: any[] = [];
      return resolver(
        forEach.call(part, ([k, v]: any) => {
          key = k;
          for (const item of transformValue(key, v)) {
            values.push(item);
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

interface ReduceGroupParameters<T> {
  iterable: AnyIterable<T>;
  reduceAndMap: Function;
  resolver: ResolverType;
  mapper: FunctionAnyMapper<T>;
  transformValue: Function;
}

function reduceGroup<T, R>({
  iterable,
  reduceAndMap,
  resolver,
  mapper,
  transformValue,
}: ReduceGroupParameters<T>) {
  return reduceAndMap.call(
    iterable,
    (g: any, t: any) =>
      resolver(mapper(t), (key) => {
        for (const item of transformValue(key, t)) {
          groupItem(g, key, item);
        }
        return g;
      }),
    new Map<R, T[]>(),
    (x: any) => x.entries(),
  );
}

function nonOrderedGroup<T>(
  {
    iterable,
    reduceAndMap,
    resolver,
    mapper,
    transformValue,
  }: ReduceGroupParameters<T>,
  iterate: IterateIngredient,
) {
  const reduced = reduceGroup({
    iterable,
    reduceAndMap,
    resolver,
    mapper,
    transformValue,
  });

  const resolved = resolver(reduced, (r) =>
    mapSync.call(r, (([key, values]: [any, any]) => ({
      key,
      values,
    })) as any),
  );
  return iterate(resolved);
}

export function singleItem<T>(_k: any, t: T) {
  return [t];
}

export function groupRecipe(ingredients: GroupIngredients) {
  const orderedGroup = orderedGroupRecipe(ingredients);
  const { reduceAndMap, resolver, iterate } = ingredients;
  return function <T>(
    this: AnyIterable<T>,
    baseMapper: AnyMapper<T>,
    baseTransformValue?: AnyMapper<T>,
  ) {
    const mapper = prepare(baseMapper);
    const transformValue = baseTransformValue
      ? prepare(baseTransformValue)
      : singleItem;
    if (isAnyOrderAssured(mapper, this)) {
      return orderedGroup.call(this, mapper, transformValue);
    } else {
      return nonOrderedGroup<T>(
        { iterable: this, reduceAndMap, resolver, mapper, transformValue },
        iterate,
      );
    }
  };
}
