import fluentAsync from './fluentAsync';
import * as funcs from './fluentFunctions';
import { FluentIterable } from './types';
import { mountFluentFunctions } from './mount-fluent-functions';

/**
 * Tranforms an iterable into a [[FluentIterable]].
 * @typeparam T The type of the items in the iterable.
 * @param iterable The iterable instance.
 * @returns The [[FluentIterable]] instance.
 */
function fluent<T>(iterable: Iterable<T>): FluentIterable<T> {
  return {
    ...mountFluentFunctions(iterable, funcs, fluent),
    toAsync: () => fluentAsync(funcs.toAsync(iterable)),
    [Symbol.iterator]: () => iterable[Symbol.iterator](),
  };
}

export default fluent;
