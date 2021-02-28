import { AnyIterable } from 'augmentative-iterable';
import { extend } from 'extension-methods';
import { asyncHandler } from './async-handler';
import { syncHandler } from './sync-handler';
import { iterateAsync } from './utils';

export function internalWrapper<T>(iterable: Iterable<T>) {
  return extend(iterable, syncHandler);
}

export function internalAsyncWrapper<T>(iterable: AnyIterable<T>) {
  return extend(iterateAsync(iterable), asyncHandler);
}
