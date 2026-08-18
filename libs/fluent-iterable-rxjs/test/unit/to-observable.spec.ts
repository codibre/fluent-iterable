import { fluent, fluentAsync } from '@codibre/fluent-iterable';
import '../../src';

describe('toObservable', () => {
	describe('sync', () => {
		it('should convert an FluentIterable to rxjs.Observable', async () => {
			const iterable = fluent([1, 2, 3]);

			const observable = iterable.toObservable();
			const result: number[] = [];
			await observable.forEach((x) => result.push(x));

			expect(result).toEqual([1, 2, 3]);
		});
	});

	describe('async', () => {
		it('should convert an FluentAsyncIterable to rxjs.Observable', async () => {
			const iterable = fluentAsync([1, 2, 3]).map((x) => x * 2);

			const observable = iterable.toObservable();
			const result: number[] = [];
			await observable.forEach((x) => result.push(x));

			expect(result).toEqual([2, 4, 6]);
		});
	});
});
