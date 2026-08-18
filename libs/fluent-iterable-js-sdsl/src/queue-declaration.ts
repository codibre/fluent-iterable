import {
	AsyncMapper,
	extend,
	extendAsync,
	Mapper,
} from '@codibre/fluent-iterable';
import { IterableQueue } from './queue/iterable-queue';
import { toQueueAsync } from './queue/to-queue-async';
import { toQueue } from './queue/to-queue';

declare module '@codibre/fluent-iterable' {
	interface FluentIterable<T> {
		toQueue<K = T>(value?: Mapper<T, K>): IterableQueue<K>;
		toQueue<K extends keyof T>(value: K): IterableQueue<T[K]>;

		toQueueAsync<K = T>(
			value?: Mapper<T, K> | AsyncMapper<T, K>,
		): Promise<IterableQueue<K>>;
		toQueueAsync<K extends keyof T>(value: K): Promise<IterableQueue<T[K]>>;
	}

	interface FluentAsyncIterable<T> {
		toQueue<K = T>(
			value?: Mapper<T, K> | AsyncMapper<T, K>,
		): Promise<IterableQueue<K>>;
		toQueue<K extends keyof T>(value: K): Promise<IterableQueue<T[K]>>;
	}
}

extend.useResolving('toQueue', toQueue);
extend.useResolving('toQueueAsync', toQueueAsync);
extendAsync.useResolving('toQueue', toQueueAsync);
