import { AnyIterable } from '../types-internal';

export interface ProxyReference {
  [key: string]: Function;
}

export function getHandler(proxyReference: ProxyReference) {
  return {
    get<T>(target: AnyIterable<T>, name: string) {
      if (name in target) {
        const value = target[name as keyof AnyIterable<T>];
        return typeof value === 'function'
          ? (value as Function).bind(target)
          : value;
      }
      if (name in proxyReference) {
        const value = function (...args: any[]) {
          return proxyReference[name](target, ...args);
        } as never;
        target[name as keyof AnyIterable<T>] = value;
        return value;
      }
    },
  };
}
