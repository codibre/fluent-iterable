/* eslint-disable guard-for-in */

import { AnyIterable } from '../types-internal';
import { map } from '../sync-base';
import { iterateObjEntries } from '../utils';
import { toObject } from '../sync';

const getDefinition = <Func extends Function>(
  iterableFunc: Func,
  wrapper: (...args: any[]) => any,
) => {
  return function <T>(this: AnyIterable<T>, ...args: any[]) {
    return wrapper(iterableFunc.call(this, ...args));
  };
};

const getProperty = ([prop]: any) => prop;

function getValue(
  wrapper: (...args: any[]) => any,
): ([_p, func]: any) => <T>(this: AnyIterable<T>, ...args: any[]) => any {
  return ([_p, func]: any) => getDefinition(func, wrapper);
}

export function mountIterableFunctions<
  T,
  Func extends Function,
  Funcs extends { [key: string]: Func }
>(iterableFuncs: Funcs, wrapper: (...args: any[]) => any): any {
  const result = toObject.call(
    iterateObjEntries(iterableFuncs),
    getProperty,
    getValue(wrapper),
  );

  return result;
}
