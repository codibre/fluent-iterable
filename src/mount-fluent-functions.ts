import { toObject } from './to-object';
import { fromObject } from './from-object';

export function mountIterableFunctions<
  T,
  Func extends Function,
  Funcs extends { [key: string]: Func }
>(
  iterable: Iterable<T> | AsyncIterable<T>,
  iterableFuncs: Funcs,
  wrapper: (...args: any[]) => any,
): any {
  return toObject(
    fromObject(iterableFuncs),
    (x) => x[0] as string,
    (x) => {
      return (...args: any[]) => wrapper(x[1](iterable, ...args));
    },
  );
}

export function mountResolvingFunctions<
  T,
  Func extends Function,
  Funcs extends { [key: string]: Func }
>(iterable: Iterable<T> | AsyncIterable<T>, resolvingFuncs: Funcs): any {
  const newLocal = fromObject(resolvingFuncs);
  return toObject(
    newLocal,
    (x) => x[0] as string,
    (x) => {
      return (...args: any[]) => x[1](iterable, ...args);
    },
  );
}
