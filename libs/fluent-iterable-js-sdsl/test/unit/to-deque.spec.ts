import { fluent, fluentAsync, identity } from '@codibre/fluent-iterable';
import { IterableDeque } from '../../src';
import { toDeque } from '../../src/deque/to-deque';
import { toDequeAsync } from '../../src/deque/to-deque-async';

describe('deque-declaration.ts', () => {
	describe(toDeque.name, () => {
		it('should return an ordered map instance using function mapper', () => {
			const result = fluent([3, 2, 1]).toDeque(identity);

			expect(result).toBeInstanceOf(IterableDeque);
			expect([...result]).toEqual([3, 2, 1]);
		});

		it('should return an ordered map instance using function mapper and reverse', () => {
			const result = fluent([3, 2, 1]).toDeque(identity, true);

			expect(result).toBeInstanceOf(IterableDeque);
			expect([...result]).toEqual([1, 2, 3]);
		});

		it('should return an ordered map instance using property name', () => {
			const result = fluent([{ k: 3 }, { k: 2 }, { k: 1 }]).toDeque('k');

			expect(result).toBeInstanceOf(IterableDeque);
			expect([...result]).toEqual([3, 2, 1]);
		});
	});

	describe(toDequeAsync.name, () => {
		it('should return an ordered map instance using function mapper', async () => {
			const result = await fluent([3, 2, 1]).toDequeAsync(identity);

			expect(result).toBeInstanceOf(IterableDeque);
			expect([...result]).toEqual([3, 2, 1]);
		});

		it('should return an ordered map instance using function mapper and reverse', async () => {
			const result = await fluent([3, 2, 1]).toDequeAsync(identity, true);

			expect(result).toBeInstanceOf(IterableDeque);
			expect([...result]).toEqual([1, 2, 3]);
		});

		it('should return an ordered map instance using property name', async () => {
			const result = await fluent([{ k: 3 }, { k: 2 }, { k: 1 }]).toDequeAsync(
				'k',
			);

			expect(result).toBeInstanceOf(IterableDeque);
			expect([...result]).toEqual([3, 2, 1]);
		});
	});

	describe(`${toDequeAsync.name} (fluentAsync)`, () => {
		it('should return an ordered map instance using function mapper', async () => {
			const result = await fluentAsync([3, 2, 1]).toDeque(identity);

			expect(result).toBeInstanceOf(IterableDeque);
			expect([...result]).toEqual([3, 2, 1]);
		});

		it('should return an ordered map instance using function mapper and reverse', async () => {
			const result = await fluentAsync([3, 2, 1]).toDeque(identity, true);

			expect(result).toBeInstanceOf(IterableDeque);
			expect([...result]).toEqual([1, 2, 3]);
		});

		it('should return an ordered map instance using property name', async () => {
			const result = await fluentAsync([{ k: 3 }, { k: 2 }, { k: 1 }]).toDeque(
				'k',
			);

			expect(result).toBeInstanceOf(IterableDeque);
			expect([...result]).toEqual([3, 2, 1]);
		});
	});
});
