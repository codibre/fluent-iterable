/* eslint-disable guard-for-in */

export function mountIterableFunctions<
  T,
  Func extends Function,
  Funcs extends { [key: string]: Func }
>(iterableFuncs: Funcs, wrapper: (...args: any[]) => any): any {
  const result: any = {};
  for (const prop in iterableFuncs) {
    result[prop] = function (...args: any[]) {
      return wrapper(iterableFuncs[prop](...args));
    };
  }

  return result;
}
