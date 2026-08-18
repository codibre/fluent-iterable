import { extend, extendAsync, Mapper, Reducer } from '@codibre/fluent-iterable';
import { BinarySearchTree } from './ordered-map/binary-search-tree';
import { toOrderedMap } from './ordered-map/to-ordered-map';
import { toOrderedMapAsync } from './ordered-map/to-ordered-map-async';

declare module '@codibre/fluent-iterable' {
	interface FluentIterable<T> {
		toBinarySearchTree<K>(
			key: Mapper<T, K>,
			cmp?: (x: K, y: K) => number,
		): BinarySearchTree<K, T>;
		toBinarySearchTree<K extends keyof T>(
			key: K,
			cmp?: (x: T[K], y: T[K]) => number,
		): BinarySearchTree<T[K], T>;
		toBinarySearchTree<K, V>(
			key: Mapper<T, K>,
			value: Mapper<T, V>,
			cmp?: (x: K, y: K) => number,
			reducer?: Reducer<T, V>,
		): BinarySearchTree<K, V>;
		toBinarySearchTree<K extends keyof T, V>(
			key: K,
			value: Mapper<T, V>,
			cmp?: (x: T[K], y: T[K]) => number,
			reducer?: Reducer<T, V>,
		): BinarySearchTree<T[K], V>;
		toBinarySearchTree<K, V extends keyof T>(
			key: Mapper<T, K>,
			value: V,
			cmp?: (x: K, y: K) => number,
		): BinarySearchTree<K, T[V]>;
		toBinarySearchTree<K extends keyof T, V extends keyof T>(
			key: K,
			value: V,
			cmp?: (x: T[K], y: T[K]) => number,
		): BinarySearchTree<T[K], T[V]>;

		toBinarySearchTreeAsync<K>(
			key: Mapper<T, K>,
			cmp?: (x: K, y: K) => number,
		): Promise<BinarySearchTree<K, T>>;
		toBinarySearchTreeAsync<K extends keyof T>(
			key: K,
			cmp?: (x: T[K], y: T[K]) => number,
		): Promise<BinarySearchTree<T[K], T>>;
		toBinarySearchTreeAsync<K, V>(
			key: Mapper<T, K>,
			value: Mapper<T, V>,
			cmp?: (x: K, y: K) => number,
			reducer?: Reducer<T, V>,
		): Promise<BinarySearchTree<K, V>>;
		toBinarySearchTreeAsync<K extends keyof T, V>(
			key: K,
			value: Mapper<T, V>,
			cmp?: (x: T[K], y: T[K]) => number,
			reducer?: Reducer<T, V>,
		): Promise<BinarySearchTree<T[K], V>>;
		toBinarySearchTreeAsync<K, V extends keyof T>(
			key: Mapper<T, K>,
			value: V,
			cmp?: (x: K, y: K) => number,
		): Promise<BinarySearchTree<K, T[V]>>;
		toBinarySearchTreeAsync<K extends keyof T, V extends keyof T>(
			key: K,
			value: V,
			cmp?: (x: T[K], y: T[K]) => number,
		): Promise<BinarySearchTree<T[K], T[V]>>;
	}

	interface FluentAsyncIterable<T> {
		toBinarySearchTree<K>(
			key: Mapper<T, K>,
			cmp?: (x: K, y: K) => number,
		): Promise<BinarySearchTree<K, T>>;
		toBinarySearchTree<K extends keyof T>(
			key: K,
			cmp?: (x: T[K], y: T[K]) => number,
		): Promise<BinarySearchTree<T[K], T>>;
		toBinarySearchTree<K, V>(
			key: Mapper<T, K>,
			value: Mapper<T, V>,
			cmp?: (x: K, y: K) => number,
			reducer?: Reducer<T, V>,
		): Promise<BinarySearchTree<K, V>>;
		toBinarySearchTree<K extends keyof T, V>(
			key: K,
			value: Mapper<T, V>,
			cmp?: (x: T[K], y: T[K]) => number,
			reducer?: Reducer<T, V>,
		): Promise<BinarySearchTree<T[K], V>>;
		toBinarySearchTree<K, V extends keyof T>(
			key: Mapper<T, K>,
			value: V,
			cmp?: (x: K, y: K) => number,
		): Promise<BinarySearchTree<K, T[V]>>;
		toBinarySearchTree<K extends keyof T, V extends keyof T>(
			key: K,
			value: V,
			cmp?: (x: T[K], y: T[K]) => number,
		): Promise<BinarySearchTree<T[K], T[V]>>;
	}
}

extend.useResolving('toBinarySearchTree', toOrderedMap);
extend.useResolving('toBinarySearchTreeAsync', toOrderedMapAsync);
extendAsync.useResolving('toBinarySearchTree', toOrderedMapAsync);
