import { Mapper, Group } from '../types';
import { AnyIterable } from './any-iterable';
import { AnyMapper } from './any-mapper';

export function getGrouper<T, R>(
  iterable: AnyIterable<T>,
  mapper: AnyMapper<T>,
  reduceAndMap: Function,
  grouper: <K>(k: any, g: (k: K) => any) => any,
  map: Function,
) {
  return {
    mapped: reduceAndMap(
      iterable,
      (g: any, t: any) =>
        grouper(mapper(t), (key) => {
          const values = g.get(key) || [];
          values.push(t);
          g.set(key, values);
          return g;
        }),
      new Map<R, T[]>(),
      (x: any) => x.entries(),
    ),
    group: (groups: Map<R, T[]>) =>
      map(groups, ([key, values]: [any, any]) => ({ key, values })),
  };
}
