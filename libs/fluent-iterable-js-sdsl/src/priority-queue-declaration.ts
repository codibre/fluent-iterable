import {
	AsyncMapper,
	Comparer,
	extend,
	extendAsync,
	Mapper,
} from '@codibre/fluent-iterable';
import { IterablePriorityQueue } from './priority-queue/iterable-priority-queue';
import { toPriorityQueueAsync } from './priority-queue/to-priority-queue-async';
import { toPriorityQueue } from './priority-queue/to-priority-queue';

declare module '@codibre/fluent-iterable' {
	interface FluentIterable<T> {
		toPriorityQueue<K = T>(
			value?: Mapper<T, K>,
			comparer?: Comparer<K>,
		): IterablePriorityQueue<K>;
		toPriorityQueue<K extends keyof T>(
			value: K,
			comparer?: Comparer<K>,
		): IterablePriorityQueue<T[K]>;

		toPriorityQueueAsync<K = T>(
			value?: Mapper<T, K> | AsyncMapper<T, K>,
			comparer?: Comparer<K>,
		): Promise<IterablePriorityQueue<K>>;
		toPriorityQueueAsync<K extends keyof T>(
			value: K,
			comparer?: Comparer<K>,
		): Promise<IterablePriorityQueue<T[K]>>;
	}

	interface FluentAsyncIterable<T> {
		toPriorityQueue<K = T>(
			value?: Mapper<T, K> | AsyncMapper<T, K>,
			comparer?: Comparer<K>,
		): Promise<IterablePriorityQueue<K>>;
		toPriorityQueue<K extends keyof T>(
			value: K,
			comparer?: Comparer<K>,
		): Promise<IterablePriorityQueue<T[K]>>;
	}
}

extend.useResolving('toPriorityQueue', toPriorityQueue);
extend.useResolving('toPriorityQueueAsync', toPriorityQueueAsync);
extendAsync.useResolving('toPriorityQueue', toPriorityQueueAsync);
