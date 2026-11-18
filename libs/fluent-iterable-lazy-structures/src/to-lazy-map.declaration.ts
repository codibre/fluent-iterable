import { extendAsync } from '@codibre/fluent-iterable';
import { LazyMap } from './lazy-map';
import { toLazyMap } from './to-lazy-map';

declare module '@codibre/fluent-iterable' {
  interface FluentAsyncIterable<T> {
    /**
     * Creates a {@link LazyMap} fed by this async iterable. See
     * `@fluent-iterable/lazy-structures`.
     */
    toLazyMap<K, V = T>(
      keySelector: (item: T) => K,
      valueSelector?: (item: T) => V,
    ): LazyMap<K, V, T>;
  }
}

// The resolving registry assigns the function straight onto the prototype,
// so callers receive the LazyMap instance itself — not a promise wrapper —
// while still going through the core plugin system. The core registry type
// (AsyncIterableResolvingOperation) is itself `(...args: any[]) =>
// PromiseLike<any>`, so this adapter has to mirror that contract exactly.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function registerToLazyMap(this: AsyncIterable<unknown>, ...args: any[]): any {
  return toLazyMap.call(this, args[0], args[1]);
}

extendAsync.useResolving(toLazyMap.name, registerToLazyMap);
