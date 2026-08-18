import {
	AsyncMapper,
	extend,
	extendAsync,
	Mapper,
} from '@codibre/fluent-iterable';
import { IterableStack } from './stack/iterable-stack';
import { toStackAsync } from './stack/to-stack-async';
import { toStack } from './stack/to-stack';

declare module '@codibre/fluent-iterable' {
	interface FluentIterable<T> {
		toStack<K = T>(value?: Mapper<T, K>): IterableStack<T>;
		toStack<K extends keyof T>(value: K): IterableStack<T[K]>;

		toStackAsync<K = T>(
			value?: Mapper<T, K> | AsyncMapper<T, K>,
		): Promise<IterableStack<K>>;
		toStackAsync<K extends keyof T>(value: K): Promise<IterableStack<T[K]>>;
	}

	interface FluentAsyncIterable<T> {
		toStack<K = T>(
			value?: Mapper<T, K> | AsyncMapper<T, K>,
		): Promise<IterableStack<K>>;
		toStack<K extends keyof T>(value: K): Promise<IterableStack<T[K]>>;
	}
}

extend.useResolving('toStack', toStack);
extend.useResolving('toStackAsync', toStackAsync);
extendAsync.useResolving('toStack', toStackAsync);
