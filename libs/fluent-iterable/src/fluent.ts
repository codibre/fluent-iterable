import { FluentIterable } from './types';
import {
  iterableFuncs,
  resolvingFuncs,
  iterableAsyncFuncs,
  special,
  specialAsync,
} from './mounters';
import { mountSpecial } from './mounters';
import {
  FluentClass,
  addFluentAsyncMethod,
  addFluentMethod,
  addFluentResolvingMethod,
} from './fluent-class';
import { fluentAsync } from './fluent-async';
import { addFactory } from './utils/internal-utils';

/**
 * Tranforms an iterable into a [[FluentIterable]].
 * @typeparam T The type of the items in the iterable.
 * @param iterable The iterable instance.
 * @returns The [[FluentIterable]] instance.
 */
function fluent<T>(iterable: Iterable<T>): FluentIterable<T> {
  return (iterable instanceof FluentClass
    ? iterable
    : new FluentClass(iterable)) as unknown as FluentIterable<T>;
}

Object.keys(iterableFuncs).forEach(addFactory(addFluentMethod, iterableFuncs));
Object.keys(iterableAsyncFuncs).forEach(
  addFactory(addFluentAsyncMethod, iterableAsyncFuncs),
);
const mountedSpecial = mountSpecial(special, fluent, fluentAsync);
Object.keys(mountedSpecial).forEach(
  addFactory(addFluentMethod, mountedSpecial),
);
const mountedSpecialAsync = mountSpecial(specialAsync, fluent, fluentAsync);
Object.keys(mountedSpecialAsync).forEach(
  addFactory(addFluentAsyncMethod, mountedSpecialAsync),
);
Object.keys(resolvingFuncs).forEach(
  addFactory(addFluentResolvingMethod, resolvingFuncs),
);

export default fluent;
