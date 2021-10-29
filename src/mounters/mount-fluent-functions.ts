/* eslint-disable guard-for-in */

import { AnyIterable } from 'augmentative-iterable';
import { transformObjValues } from '../transform-obj-values';

const getDefinition = <Func extends Function>(
  iterableFunc: Func,
  wrapper: (...args: any[]) => any,
  force: boolean,
) => {
  return force
    ? function <T>(this: AnyIterable<T>, ...args: any[]) {
        return wrapper(iterableFunc.call(this, ...args));
      }
    : function <T>(this: AnyIterable<T>, ...args: any[]) {
        const result = iterableFunc.call(this, ...args);
        return wrapper(result);
      };
};

function getValue(wrapper: (...args: any[]) => any, force: boolean) {
  return ([_p, func]: any) => getDefinition(func, wrapper, force);
}

export function mountIterableFunctions<
  Func extends Function,
  Funcs extends { [key: string]: Func }
>(iterableFuncs: Funcs, wrapper: (...args: any[]) => any, force = false): any {
  return transformObjValues(iterableFuncs, getValue(wrapper, force));
}
