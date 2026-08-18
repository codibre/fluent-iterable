import { fluent, fluentAsync, identity } from '@codibre/fluent-iterable';
import { IterablePriorityQueue, descNumberComparer } from '../../src';
import { toPriorityQueue } from '../../src/priority-queue/to-priority-queue';
import { toPriorityQueueAsync } from '../../src/priority-queue/to-priority-queue-async';

describe('priority-priority-queue-declaration.ts', () => {
	describe(toPriorityQueue.name, () => {
		it('should return an ordered map instance using function mapper', () => {
			const result = fluent([1, 2, 3]).toPriorityQueue(identity);

			expect(result).toBeInstanceOf(IterablePriorityQueue);
			expect([...result]).toEqual([1, 2, 3]);
		});
		it('should return an ordered map instance using function mapper and comparer', () => {
			const result = fluent([1, 2, 3]).toPriorityQueue(
				identity,
				descNumberComparer,
			);

			expect(result).toBeInstanceOf(IterablePriorityQueue);
			expect([...result]).toEqual([3, 2, 1]);
		});

		it('should return an ordered map instance using property name', () => {
			const result = fluent([{ k: 1 }, { k: 2 }, { k: 3 }]).toPriorityQueue(
				'k',
			);

			expect(result).toBeInstanceOf(IterablePriorityQueue);
			expect([...result]).toEqual([1, 2, 3]);
		});

		it('should return an ordered map instance using property name and custom comparer', () => {
			const result = fluent([{ k: 1 }, { k: 2 }, { k: 3 }]).toPriorityQueue(
				'k',
				descNumberComparer,
			);

			expect(result).toBeInstanceOf(IterablePriorityQueue);
			expect([...result]).toEqual([3, 2, 1]);
		});
	});

	describe(toPriorityQueueAsync.name, () => {
		it('should return an ordered map instance using function mapper', async () => {
			const result = await fluent([1, 2, 3]).toPriorityQueueAsync(identity);

			expect(result).toBeInstanceOf(IterablePriorityQueue);
			expect([...result]).toEqual([1, 2, 3]);
		});

		it('should return an ordered map instance using function mapper and custom comparer', async () => {
			const result = await fluent([1, 2, 3]).toPriorityQueueAsync(
				identity,
				descNumberComparer,
			);

			expect(result).toBeInstanceOf(IterablePriorityQueue);
			expect([...result]).toEqual([3, 2, 1]);
		});

		it('should return an ordered map instance using property name', async () => {
			const result = await fluent([
				{ k: 3 },
				{ k: 2 },
				{ k: 1 },
			]).toPriorityQueueAsync('k');

			expect(result).toBeInstanceOf(IterablePriorityQueue);
			expect([...result]).toEqual([1, 2, 3]);
		});

		it('should return an ordered map instance using property name and custom comparer', async () => {
			const result = await fluent([
				{ k: 1 },
				{ k: 2 },
				{ k: 3 },
			]).toPriorityQueueAsync('k', descNumberComparer);

			expect(result).toBeInstanceOf(IterablePriorityQueue);
			expect([...result]).toEqual([3, 2, 1]);
		});
	});

	describe(`${toPriorityQueueAsync.name} (fluentAsync)`, () => {
		it('should return an ordered map instance using function mapper', async () => {
			const result = await fluentAsync([1, 2, 3]).toPriorityQueue(identity);

			expect(result).toBeInstanceOf(IterablePriorityQueue);
			expect([...result]).toEqual([1, 2, 3]);
		});

		it('should return an ordered map instance using function mapper and custom comparer', async () => {
			const result = await fluentAsync([1, 2, 3]).toPriorityQueue(
				identity,
				descNumberComparer,
			);

			expect(result).toBeInstanceOf(IterablePriorityQueue);
			expect([...result]).toEqual([3, 2, 1]);
		});

		it('should return an ordered map instance using property name', async () => {
			const result = await fluentAsync([
				{ k: 3 },
				{ k: 1 },
				{ k: 2 },
			]).toPriorityQueue('k');

			expect(result).toBeInstanceOf(IterablePriorityQueue);
			expect([...result]).toEqual([1, 2, 3]);
		});

		it('should return an ordered map instance using property name and custom comparer', async () => {
			const result = await fluentAsync([
				{ k: 3 },
				{ k: 1 },
				{ k: 2 },
			]).toPriorityQueue('k', descNumberComparer);

			expect(result).toBeInstanceOf(IterablePriorityQueue);
			expect([...result]).toEqual([3, 2, 1]);
		});
	});
});
