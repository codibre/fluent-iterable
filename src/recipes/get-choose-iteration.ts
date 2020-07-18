import { AnyIterable } from '../types-internal/any-iterable';

export function getChooseIteration<T, R>(
  iterateAsArray1: (arr: T[], ...args: any[]) => R,
  iterate1: (arr: any, ...args: any[]) => R,
) {
  return function (this: AnyIterable<T>, args: any): any {
    return Array.isArray(this)
      ? iterateAsArray1(this, args)
      : iterate1(this, args);
  };
}
