import { fluentSymbol } from './types-internal/fluent-symbol';
import { fluentAsync } from './fluent-async';
import { FluentIterable } from './types';
import {
  iterableFuncs,
  resolvingFuncs,
  iterableAsyncFuncs,
  special,
} from './mounters';
import { mountIterableFunctions, mountSpecial } from './mounters';
import { getExtender, defaultCookFunction } from 'extension-methods';
import { getFluent } from './types-internal';

export const proxyReference: { [key: string]: Function } = {};
const handler = getExtender(proxyReference, defaultCookFunction, 'extender');

/**
 * Tranforms an iterable into a [[FluentIterable]].
 * @typeparam T The type of the items in the iterable.
 * @param iterable The iterable instance.
 * @returns The [[FluentIterable]] instance.
 */
function fluent<T>(iterable: Iterable<T>): FluentIterable<T> {
  return getFluent(iterable, handler, fluentSymbol);
}

Object.assign(proxyReference, {
  ...mountIterableFunctions(iterableFuncs, fluent),
  ...mountIterableFunctions(iterableAsyncFuncs, fluentAsync),
  ...resolvingFuncs,
  ...mountSpecial(special, fluent, fluentAsync),
  fluent: fluentSymbol,
});

export default fluent;
