import { AnyIterable } from './any-iterable';
import { AnyMapper } from './any-mapper';

export function getGrouper<T, R>(
  iterable: AnyIterable<T>,
  mapper: AnyMapper<T>,
  reduceAndMap: Function,
  resolver: <K>(k: any, g: (k: K) => any) => any,
) {
  return reduceAndMap(
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

export function groupMap(groups: any, map: Function) {
  return map(groups, ([key, values]: [any, any]) => ({ key, values }));
}
