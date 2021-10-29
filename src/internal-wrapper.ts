import { AnyIterable } from 'augmentative-iterable';
import { asyncHandler } from './async-handler';
import { syncHandler } from './sync-handler';
import { extendFluent } from './types-internal';
import { iterateAsync } from './utils';

export function internalWrapper<T>(iterable: Iterable<T>) {
  return extendFluent(iterable, syncHandler);
}

export function internalAsyncWrapper<T>(iterable: AnyIterable<T>) {
  return extendFluent(iterateAsync(iterable), asyncHandler);
}
