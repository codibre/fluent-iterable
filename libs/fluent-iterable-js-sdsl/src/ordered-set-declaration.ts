import { extend, extendAsync, Mapper } from '@codibre/fluent-iterable';
import { BinarySearchTreeSet } from './ordered-set/binary-search-tree-set';
import { toOrderedSet } from './ordered-set/to-ordered-set';
import { toOrderedSetAsync } from './ordered-set/to-ordered-set-async';

declare module '@codibre/fluent-iterable' {
	interface FluentIterable<T> {
		toBinarySearchTreeSet<K>(
			key: Mapper<T, K>,
			cmp?: (x: K, y: K) => number,
		): BinarySearchTreeSet<K>;
		toBinarySearchTreeSet<K extends keyof T>(
			key: K,
			cmp?: (x: T[K], y: T[K]) => number,
		): BinarySearchTreeSet<T[K]>;

		toBinarySearchTreeSetAsync<K>(
			key: Mapper<T, K>,
			cmp?: (x: K, y: K) => number,
		): Promise<BinarySearchTreeSet<K>>;
		toBinarySearchTreeSetAsync<K extends keyof T>(
			key: K,
			cmp?: (x: T[K], y: T[K]) => number,
		): Promise<BinarySearchTreeSet<T[K]>>;
	}

	interface FluentAsyncIterable<T> {
		toBinarySearchTreeSet<K>(
			key: Mapper<T, K>,
			cmp?: (x: K, y: K) => number,
		): Promise<BinarySearchTreeSet<K>>;
		toBinarySearchTreeSet<K extends keyof T>(
			key: K,
			cmp?: (x: T[K], y: T[K]) => number,
		): Promise<BinarySearchTreeSet<T[K]>>;
	}
}

extend.useResolving('toBinarySearchTreeSet', toOrderedSet);
extend.useResolving('toBinarySearchTreeSetAsync', toOrderedSetAsync);
extendAsync.useResolving('toBinarySearchTreeSet', toOrderedSetAsync);
