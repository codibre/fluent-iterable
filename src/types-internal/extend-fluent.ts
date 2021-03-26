import { extend, Extender } from 'extension-methods';
export const proxyRef = Symbol('proxyRef');

export function extendFluent(iterable: any, handler: Extender<any>) {
  const result = extend(iterable, handler);
  // result[proxyRef] = result;
  return result;
}
