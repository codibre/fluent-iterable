import fluentAsync from './fluentAsync';
import { FluentIterable } from './types';
import {
  mountIterableFunctions,
  mountResolvingFunctions,
} from './mount-fluent-functions';
import {
  iterableFuncs,
  resolvingFuncs,
  iterableAsyncFuncs,
  special,
} from './fluentFunctions';
import { toAsync } from './to-async';
import { fromObject } from './from-object';
import { mountSpecial } from './mount-special';

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
