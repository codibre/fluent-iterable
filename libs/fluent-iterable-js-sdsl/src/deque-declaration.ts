import {
	AsyncMapper,
	extend,
	extendAsync,
	Mapper,
} from '@codibre/fluent-iterable';
import { toDequeAsync } from './deque/to-deque-async';
import { toDeque } from './deque/to-deque';
import { IterableDeque } from './deque/iterable-deque';

declare module '@codibre/fluent-iterable' {
	interface FluentIterable<T> {
		toDeque(reverse?: boolean): IterableDeque<T>;
		toDeque<K = T>(value?: Mapper<T, K>, reverse?: boolean): IterableDeque<K>;
		toDeque<K extends keyof T>(
			value: K,
			reverse?: boolean,
		): IterableDeque<T[K]>;

		toDequeAsync(reverse?: boolean): Promise<IterableDeque<T>>;
		toDequeAsync<K = T>(reverse?: boolean): Promise<IterableDeque<K>>;
		toDequeAsync<K = T>(
			value?: Mapper<T, K> | AsyncMapper<T, K>,
			reverse?: boolean,
		): Promise<IterableDeque<K>>;
		toDequeAsync<K extends keyof T>(
			value: K,
			reverse?: boolean,
		): Promise<IterableDeque<T[K]>>;
	}

	interface FluentAsyncIterable<T> {
		toDeque(reverse?: boolean): Promise<IterableDeque<T>>;
		toDeque<K = T>(
			value?: Mapper<T, K> | AsyncMapper<T, K>,
			reverse?: boolean,
		): Promise<IterableDeque<K>>;
		toDeque<K extends keyof T>(
			value: K,
			reverse?: boolean,
		): Promise<IterableDeque<T[K]>>;
	}
}

extend.useResolving('toDeque', toDeque);
extend.useResolving('toDequeAsync', toDequeAsync);
extendAsync.useResolving('toDeque', toDequeAsync);
