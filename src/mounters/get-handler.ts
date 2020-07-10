import { AnyIterable } from '../types-internal';

export interface ProxyReference {
  [key: string]: Function;
}

export function getHandler(proxyReference: ProxyReference) {
  return {
    get<T>(target: AnyIterable<T>, name: string) {
      if (name in target) {
        return (target[name as keyof AnyIterable<T>] as any).bind(target);
      }
      if (name in proxyReference) {
        return (...args: any[]) => proxyReference[name](target, ...args);
      }
    },
  };
}
