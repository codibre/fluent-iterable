import { AnyIterable } from '../types-internal';
import { any } from '../sync';

export interface ProxyReference {
  [key: string]: Function;
}

export function getHandler(proxyReference: ProxyReference) {
  return {
    get<T>(target: T, name: string) {
      const value =
        name in target ? target[name as keyof T] : proxyReference[name];
      return typeof value === 'function' ? value.bind(target) : value;
    },
  };
}
