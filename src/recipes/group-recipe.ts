import { ResolverType, Iterate } from '../types-internal';
import { AnyMapper } from '../types-internal';
import { AnyIterable } from 'augmentative-iterable';

export function groupRecipe(
  reduceAndMap: Function,
  resolver: ResolverType,
  map: Function,
  iterate: Iterate,
) {
  return function <T, R>(this: AnyIterable<T>, mapper: AnyMapper<T>) {
    const reduced = reduceAndMap.call(
      this,
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
    const resolved = resolver(reduced, (r) =>
      map.call(r, ([key, values]: [any, any]) => ({ key, values })),
    );
    return iterate(resolved);
  };
}
