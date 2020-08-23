import { AnyMapper, ResolverType } from '../types-internal';
import { orderedOperationRecipe } from './ordered-operation-recipe';
import { AnyIterable } from 'augmentative-iterable';
import { GroupIngredients } from './ingredients';

export function orderedGroupRecipe({
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
