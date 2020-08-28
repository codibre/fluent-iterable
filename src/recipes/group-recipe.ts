import {
  isAnyOrderAssured,
  isOrderAssured,
  ResolverType,
} from '../types-internal';
import { AnyMapper } from '../types-internal';
import { AnyIterable } from 'augmentative-iterable';
import { map as mapSync } from '../sync/map';
import { GroupIngredients } from './ingredients';
import { orderedOperationRecipe } from './ordered-operation-recipe';

function orderedGroupRecipe({
  map,
  resolver,
  partition,
  forEach,
}: GroupIngredients) {
  const ordered = orderedOperationRecipe(map, resolver, partition);
  return function <T>(this: AnyIterable<T>, mapper: AnyMapper<any>) {
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

function reduceGroup<T, R>(
  iterable: AnyIterable<T>,
  reduceAndMap: Function,
  resolver: ResolverType,
  mapper: AnyMapper<T>,
) {
  return reduceAndMap.call(
    iterable,
    (g: any, t: any) =>
      resolver(mapper(t), (key) => {
        const values = g.get(key) || [];
        values.push(t);
        g.set(key, values);
        return g;
      }),
    new Map<R, T[]>(),
    (x: any) => x.entries(),
  );
}

export function groupRecipe(ingredients: GroupIngredients) {
  const orderedGroup = orderedGroupRecipe(ingredients);
  const { reduceAndMap, resolver, iterate } = ingredients;
  return function <T, R>(this: AnyIterable<T>, mapper: AnyMapper<T>) {
    if (isAnyOrderAssured(mapper, this)) {
      return orderedGroup.call(this, mapper);
    } else {
      const reduced = reduceGroup(this, reduceAndMap, resolver, mapper);

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
