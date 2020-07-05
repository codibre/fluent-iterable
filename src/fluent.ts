import fluentAsync from './fluent-async';
import { FluentIterable } from './types';
import {
  iterableFuncs,
  resolvingFuncs,
  iterableAsyncFuncs,
  special,
} from './mounters';
import { toAsync } from './sync/to-async';
import {
  mountIterableFunctions,
  mountResolvingFunctions,
  mountSpecial,
} from './mounters';

/**
 * Tranforms an iterable into a [[FluentIterable]].
 * @typeparam T The type of the items in the iterable.
 * @param iterable The iterable instance.
 * @returns The [[FluentIterable]] instance.
 */
function fluent<T>(iterable: Iterable<T>): FluentIterable<T> {
  return {
    ...mountIterableFunctions(iterable, iterableFuncs, fluent),
    ...mountIterableFunctions(iterable, iterableAsyncFuncs, fluentAsync),
    ...mountResolvingFunctions(iterable, resolvingFuncs),
    ...mountSpecial(iterable, special, fluent, fluentAsync),
    toAsync: () => fluentAsync(toAsync(iterable)),
    [Symbol.iterator]: () => iterable[Symbol.iterator](),
  };
}

export default fluent;
