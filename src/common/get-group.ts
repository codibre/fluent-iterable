import { AnyIterable } from './any-iterable';
import { AnyMapper } from './any-mapper';
import { ResolverType } from '../utils';

export function getGroup(
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
