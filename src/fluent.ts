import { fluentAsync } from './fluent-async';
import { FluentIterable } from './types';
import {
  iterableFuncs,
  resolvingFuncs,
  iterableAsyncFuncs,
  special,
} from './mounters';
import { mountIterableFunctions, mountSpecial } from './mounters';
import { getExtender, extend, defaultCookFunction } from 'extension-methods';

export const proxyReference: { [key: string]: Function } = {};
const handler = getExtender(proxyReference, defaultCookFunction, 'extender');

/**
 * Tranforms an iterable into a [[FluentIterable]].
 * @typeparam T The type of the items in the iterable.
 * @param iterable The iterable instance.
 * @returns The [[FluentIterable]] instance.
 */
function fluent<T>(iterable: Iterable<T>): FluentIterable<T> {
  return extend(iterable, handler) as any;
}

Object.assign(proxyReference, {
  ...mountIterableFunctions(iterableFuncs, fluent),
  ...mountIterableFunctions(iterableAsyncFuncs, fluentAsync),
  ...resolvingFuncs,
  ...mountSpecial(special, fluent, fluentAsync),
});

export default fluent;
