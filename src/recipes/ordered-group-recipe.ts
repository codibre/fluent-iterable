import { AnyMapper, ResolverType } from '../types-internal';
import { orderedOperationRecipe } from './ordered-operation-recipe';
import { AnyIterable } from 'augmentative-iterable';

export function orderedGroupRecipe(
  map: Function,
  resolver: ResolverType,
  partition: Function,
  forEach: Function,
) {
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
