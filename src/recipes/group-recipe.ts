import { AnyIterable } from '../types-internal';
import { AnyMapper } from '../types-internal';
import { ResolverType } from '../utils';

export function groupRecipe(
  reduceAndMap: Function,
  resolver: ResolverType,
  map: Function,
  iterate: Function,
) {
  return <T, R>(iterable: AnyIterable<T>, mapper: AnyMapper<T>) =>
    iterate(
      resolver(
        reduceAndMap(
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
        ),
        (r) => map(r, ([key, values]: [any, any]) => ({ key, values })),
      ),
    );
}
