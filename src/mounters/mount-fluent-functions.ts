/* eslint-disable guard-for-in */

import { AnyIterable } from '../types-internal';
import { transformObjValues } from '../transform-obj-values';

const getDefinition = <Func extends Function>(
  iterableFunc: Func,
  wrapper: (...args: any[]) => any,
) => {
  return function <T>(this: AnyIterable<T>, ...args: any[]) {
    return wrapper(iterableFunc.call(this, ...args));
  };
};

const getProperty = ([prop]: any) => prop;

function getValue(wrapper: (...args: any[]) => any) {
  return ([_p, func]: any) => getDefinition(func, wrapper);
}

export function mountIterableFunctions<
  T,
  Func extends Function,
  Funcs extends { [key: string]: Func }
>(iterableFuncs: Funcs, wrapper: (...args: any[]) => any): any {
  return transformObjValues(iterableFuncs, getValue(wrapper));
}
