/* eslint-disable guard-for-in */

export function mountIterableFunctions<
  T,
  Func extends Function,
  Funcs extends { [key: string]: Func }
>(
  iterable: Iterable<T> | AsyncIterable<T>,
  iterableFuncs: Funcs,
  wrapper: (...args: any[]) => any,
): any {
  const result: any = {};
  for (const prop in iterableFuncs) {
    result[prop] = (...args: any[]) =>
      wrapper(iterableFuncs[prop](iterable, ...args));
  }

  return result;
}

export function mountResolvingFunctions<
  T,
  Func extends Function,
  Funcs extends { [key: string]: Func }
>(iterable: Iterable<T> | AsyncIterable<T>, resolvingFuncs: Funcs): any {
  const result: any = {};
  for (const prop in resolvingFuncs) {
    result[prop] = (...args: any[]) => resolvingFuncs[prop](iterable, ...args);
  }
  return result;
}
