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
import { constant } from '../utils';

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
      const boundValues = values.push.bind(values);
      return resolver(
        forEach.call(part, ([k, v]: any) => {
          key = k;
          const iterable = transformValue(k, v, values);
          if (iterable) {
            return forEach.call(iterable, boundValues);
          }
        }),
        () => ({ key, values }),
      );
    });
  };
}

interface ReduceGroupParameters<T> {
  iterable: AnyIterable<T>;
  reduceAndMap: Function;
  resolver: ResolverType;
  mapper: FunctionAnyMapper<T>;
  transformValue: Function;
  forEach: Function;
}

function reduceGroup<T, R>({
  iterable,
  reduceAndMap,
  resolver,
  mapper,
  transformValue,
  forEach,
}: ReduceGroupParameters<T>) {
  return reduceAndMap.call(
    iterable,
    (g: any, t: any) => {
      const getG = constant(g);
      return resolver(mapper(t), (key) => {
        let values = g.get(key);
        if (!values) {
          values = [];
          g.set(key, values);
        }
        const transformed = transformValue(key, t, values);
        return transformed
          ? resolver(forEach.call(transformed, values.push.bind(values)), getG)
          : g;
      });
    },
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
    forEach,
  }: ReduceGroupParameters<T>,
  iterate: IterateIngredient,
) {
  const reduced = reduceGroup({
    iterable,
    reduceAndMap,
    resolver,
    mapper,
    transformValue,
    forEach,
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
  const { reduceAndMap, resolver, iterate, forEach } = ingredients;
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
        {
          iterable: this,
          reduceAndMap,
          resolver,
          mapper,
          transformValue,
          forEach,
        },
        iterate,
      );
    }
  };
}
