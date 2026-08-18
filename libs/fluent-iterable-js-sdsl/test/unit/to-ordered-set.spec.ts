import { fluent, fluentAsync, identity } from '@codibre/fluent-iterable';
import { toOrderedSet } from '../../src/ordered-set/to-ordered-set';
import { toOrderedSetAsync } from '../../src/ordered-set/to-ordered-set-async';

describe('ordered-set-declaration.ts', () => {
	describe(toOrderedSet.name, () => {
		it('should return an ordered map instance using custom comparer', () => {
			const result = fluent([3, 2, 1]).toBinarySearchTreeSet(
				identity,
				(a, b) => a - b,
			);

			expect([...result]).toEqual([1, 2, 3]);
		});

		it('should return an ordered map instance using default comparer', () => {
			const result = fluent([3, 2, 1]).toBinarySearchTreeSet(identity);

			expect([...result]).toEqual([1, 2, 3]);
		});

		it('should return an ordered map instance using property name', () => {
			const result = fluent([
				{ k: 3 },
				{ k: 2 },
				{ k: 1 },
			]).toBinarySearchTreeSet('k');

			expect([...result]).toEqual([1, 2, 3]);
		});
	});

	describe(toOrderedSetAsync.name, () => {
		it('should return an ordered map instance using custom comparer', async () => {
			const result = await fluent([3, 2, 1]).toBinarySearchTreeSetAsync(
				identity,
				(a, b) => a - b,
			);

			expect([...result]).toEqual([1, 2, 3]);
		});

		it('should return an ordered map instance using default comparer', async () => {
			const result = await fluent([3, 2, 1]).toBinarySearchTreeSetAsync(
				identity,
			);

			expect([...result]).toEqual([1, 2, 3]);
		});

		it('should return an ordered map instance using property name', async () => {
			const result = await fluentAsync([
				{ k: 3 },
				{ k: 2 },
				{ k: 1 },
			]).toBinarySearchTreeSet('k');

			expect([...result]).toEqual([1, 2, 3]);
		});
	});

	describe(`${toOrderedSetAsync.name} (fluentAsync)`, () => {
		it('should return an ordered map instance using custom comparer', async () => {
			const result = await fluentAsync([3, 2, 1]).toBinarySearchTreeSet(
				identity,
				(a, b) => a - b,
			);

			expect([...result]).toEqual([1, 2, 3]);
		});

		it('should return an ordered map instance using default comparer', async () => {
			const result = await fluentAsync([3, 2, 1]).toBinarySearchTreeSet(
				identity,
			);

			expect([...result]).toEqual([1, 2, 3]);
		});

		it('should return an ordered map instance using property name', async () => {
			const result = await fluentAsync([
				{ k: 3 },
				{ k: 2 },
				{ k: 1 },
			]).toBinarySearchTreeSet('k');

			expect([...result]).toEqual([1, 2, 3]);
		});
	});
});
