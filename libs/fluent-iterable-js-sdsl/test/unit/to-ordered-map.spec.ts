import { fluent, fluentAsync, identity } from '@codibre/fluent-iterable';
import { toOrderedMap } from '../../src/ordered-map/to-ordered-map';
import { toOrderedMapAsync } from '../../src/ordered-map/to-ordered-map-async';

describe('ordered-map-declaration.ts', () => {
	describe(toOrderedMap.name, () => {
		it('should return an ordered map instance', () => {
			const result = fluent([3, 2, 1]).toBinarySearchTree(
				identity,
				(a, b) => a - b,
			);

			expect([...result]).toEqual([
				[1, 1],
				[2, 2],
				[3, 3],
			]);
		});

		it('should return an ordered map instance when using key name mapping', () => {
			const result = fluent([{ k: 3 }, { k: 2 }, { k: 1 }]).toBinarySearchTree(
				'k',
				(a, b) => a - b,
			);

			expect([...result]).toEqual([
				[1, { k: 1 }],
				[2, { k: 2 }],
				[3, { k: 3 }],
			]);
		});

		it('should return an ordered map instance when using key and value name mapping', () => {
			const result = fluent([{ k: 3 }, { k: 2 }, { k: 1 }]).toBinarySearchTree(
				'k',
				'k',
				(a, b) => a - b,
			);

			expect([...result]).toEqual([
				[1, 1],
				[2, 2],
				[3, 3],
			]);
		});

		it('should return an ordered map instance when using key name mapping and value function', () => {
			const result = fluent([{ k: 3 }, { k: 2 }, { k: 1 }]).toBinarySearchTree(
				'k',
				(x) => x.k * 2,
				(a, b) => a - b,
			);

			expect([...result]).toEqual([
				[1, 2],
				[2, 4],
				[3, 6],
			]);
		});
	});

	describe(toOrderedMapAsync.name, () => {
		it('should return an ordered map instance', async () => {
			const result = await fluent([3, 2, 1]).toBinarySearchTreeAsync(
				identity,
				(a, b) => a - b,
			);

			expect([...result]).toEqual([
				[1, 1],
				[2, 2],
				[3, 3],
			]);
		});

		it('should return an ordered map instance when using key name mapping', async () => {
			const result = await fluent([
				{ k: 3 },
				{ k: 2 },
				{ k: 1 },
			]).toBinarySearchTreeAsync('k', (a, b) => a - b);

			expect([...result]).toEqual([
				[1, { k: 1 }],
				[2, { k: 2 }],
				[3, { k: 3 }],
			]);
		});

		it('should return an ordered map instance when using key and value name mapping', async () => {
			const result = await fluent([
				{ k: 3 },
				{ k: 2 },
				{ k: 1 },
			]).toBinarySearchTreeAsync('k', 'k', (a, b) => a - b);

			expect([...result]).toEqual([
				[1, 1],
				[2, 2],
				[3, 3],
			]);
		});

		it('should return an ordered map instance when using key name mapping and value function', async () => {
			const result = await fluent([
				{ k: 3 },
				{ k: 2 },
				{ k: 1 },
			]).toBinarySearchTreeAsync(
				'k',
				(x) => x.k * 2,
				(a, b) => a - b,
			);

			expect([...result]).toEqual([
				[1, 2],
				[2, 4],
				[3, 6],
			]);
		});
	});

	describe(`${toOrderedMapAsync.name} (fluentAsync)`, () => {
		it('should return an ordered map instance', async () => {
			const result = await fluentAsync([3, 2, 1]).toBinarySearchTree(
				identity,
				(a, b) => a - b,
			);

			expect([...result]).toEqual([
				[1, 1],
				[2, 2],
				[3, 3],
			]);
		});

		it('should return an ordered map instance when using key name mapping', async () => {
			const result = await fluentAsync([
				{ k: 3 },
				{ k: 2 },
				{ k: 1 },
			]).toBinarySearchTree('k', (a, b) => a - b);

			expect([...result]).toEqual([
				[1, { k: 1 }],
				[2, { k: 2 }],
				[3, { k: 3 }],
			]);
		});

		it('should return an ordered map instance when using key and value name mapping', async () => {
			const result = await fluentAsync([
				{ k: 3 },
				{ k: 2 },
				{ k: 1 },
			]).toBinarySearchTree('k', 'k', (a, b) => a - b);

			expect([...result]).toEqual([
				[1, 1],
				[2, 2],
				[3, 3],
			]);
		});

		it('should return an ordered map instance when using key name mapping and value function', async () => {
			const result = await fluentAsync([
				{ k: 3 },
				{ k: 2 },
				{ k: 1 },
			]).toBinarySearchTree(
				'k',
				(x) => x.k * 2,
				(a, b) => a - b,
			);

			expect([...result]).toEqual([
				[1, 2],
				[2, 4],
				[3, 6],
			]);
		});
	});
});
