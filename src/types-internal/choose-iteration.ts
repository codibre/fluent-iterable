import { AnyIterable } from './any-iterable';

export function chooseIteration<T, R>(
  iterable: AnyIterable<T>,
  iterateAsArray1: (arr: T[], ...args: any[]) => R,
  iterate1: (arr: any, ...args: any[]) => R,
  args: any,
): any {
  return Array.isArray(iterable)
    ? iterateAsArray1(iterable, args)
    : iterate1(iterable, args);
}
