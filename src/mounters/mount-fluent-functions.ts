/* eslint-disable guard-for-in */

import { AnyIterable } from '../types-internal';

const getDefinition = <Func extends Function>(
  iterableFunc: Func,
  wrapper: (...args: any[]) => any,
) => {
  return function <T>(this: AnyIterable<T>, ...args: any[]) {
    return wrapper(iterableFunc.call(this, ...args));
  };
};

export function mountIterableFunctions<
  T,
  Func extends Function,
  Funcs extends { [key: string]: Func }
>(iterableFuncs: Funcs, wrapper: (...args: any[]) => any): any {
  const result: any = {};
  for (const prop in iterableFuncs) {
    result[prop] = getDefinition(iterableFuncs[prop], wrapper);
  }

  return result;
}
