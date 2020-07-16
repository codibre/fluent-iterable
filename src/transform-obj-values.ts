import { Mapper } from './types';
import { toObject } from './sync/to-object';
import { iterateObjEntries } from './utils';

/**
 * Applies a transformation to the value of all pro
 * @param obj The object to be iterated with
 * @param mapper the mapper to be applied to each value
 */
export function transformObjValues<T extends object>(
  obj: T,
  mapper: Mapper<[keyof T, T[keyof T]], unknown>,
) {
  return toObject.call(iterateObjEntries(obj), ([p]: any) => p, mapper as any);
}
