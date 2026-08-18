import { extend, extendAsync } from '@codibre/fluent-iterable';
import { from, Observable } from 'rxjs';

declare module '@codibre/fluent-iterable' {
	interface FluentIterable<T> {
		toObservable(): Observable<T>;
	}

	interface FluentAsyncIterable<T> {
		toObservable(): Observable<T>;
	}
}

function toObservable<T>(this: Iterable<T> | AsyncIterable<T>) {
	return from(this);
}

extend.useResolving('toObservable', toObservable);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
extendAsync.useResolving('toObservable', toObservable as any);
