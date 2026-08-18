import { fluent, fluentAsync, identity } from '@codibre/fluent-iterable';
import { IterableStack } from '../../src';
import { toStack } from '../../src/stack/to-stack';
import { toStackAsync } from '../../src/stack/to-stack-async';

describe('stack-declaration.ts', () => {
	describe(toStack.name, () => {
		it('should return an ordered map instance using function mapper', () => {
			const result = fluent([3, 2, 1]).toStack(identity);

			expect(result).toBeInstanceOf(IterableStack);
			expect([...result]).toEqual([1, 2, 3]);
		});

		it('should return an ordered map instance using property name', () => {
			const result = fluent([{ k: 3 }, { k: 2 }, { k: 1 }]).toStack('k');

			expect(result).toBeInstanceOf(IterableStack);
			expect([...result]).toEqual([1, 2, 3]);
		});
	});

	describe(toStackAsync.name, () => {
		it('should return an ordered map instance using function mapper', async () => {
			const result = await fluent([3, 2, 1]).toStackAsync(identity);

			expect(result).toBeInstanceOf(IterableStack);
			expect([...result]).toEqual([1, 2, 3]);
		});

		it('should return an ordered map instance using property name', async () => {
			const result = await fluent([{ k: 3 }, { k: 2 }, { k: 1 }]).toStackAsync(
				'k',
			);

			expect(result).toBeInstanceOf(IterableStack);
			expect([...result]).toEqual([1, 2, 3]);
		});
	});

	describe(`${toStackAsync.name} (fluentAsync)`, () => {
		it('should return an ordered map instance using function mapper', async () => {
			const result = await fluentAsync([3, 2, 1]).toStack(identity);

			expect(result).toBeInstanceOf(IterableStack);
			expect([...result]).toEqual([1, 2, 3]);
		});

		it('should return an ordered map instance using property name', async () => {
			const result = await fluentAsync([{ k: 3 }, { k: 2 }, { k: 1 }]).toStack(
				'k',
			);

			expect(result).toBeInstanceOf(IterableStack);
			expect([...result]).toEqual([1, 2, 3]);
		});
	});
});
