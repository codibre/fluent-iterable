import fluent from './fluent';
import { FluentIterable } from './types';
import { iterateObjEntries } from './utils';

export function fluentObject<T extends object, K extends keyof T>(
  iterable: T,
): FluentIterable<[K, T[K]]> {
  return fluent(iterateObjEntries(iterable));
}
