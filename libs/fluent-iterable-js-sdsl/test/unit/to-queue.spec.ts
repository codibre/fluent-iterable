import { fluent, fluentAsync, identity } from '@codibre/fluent-iterable';
import { IterableQueue } from '../../src';
import { toQueue } from '../../src/queue/to-queue';
import { toQueueAsync } from '../../src/queue/to-queue-async';

describe('queue-declaration.ts', () => {
	describe(toQueue.name, () => {
		it('should return an ordered map instance using function mapper', () => {
			const result = fluent([3, 2, 1]).toQueue(identity);

			expect(result).toBeInstanceOf(IterableQueue);
			expect([...result]).toEqual([3, 2, 1]);
		});

		it('should return an ordered map instance using property name', () => {
			const result = fluent([{ k: 3 }, { k: 2 }, { k: 1 }]).toQueue('k');

			expect(result).toBeInstanceOf(IterableQueue);
			expect([...result]).toEqual([3, 2, 1]);
		});
	});

	describe(toQueueAsync.name, () => {
		it('should return an ordered map instance using function mapper', async () => {
			const result = await fluent([3, 2, 1]).toQueueAsync(identity);

			expect(result).toBeInstanceOf(IterableQueue);
			expect([...result]).toEqual([3, 2, 1]);
		});

		it('should return an ordered map instance using property name', async () => {
			const result = await fluent([{ k: 3 }, { k: 2 }, { k: 1 }]).toQueueAsync(
				'k',
			);

			expect(result).toBeInstanceOf(IterableQueue);
			expect([...result]).toEqual([3, 2, 1]);
		});
	});

	describe(`${toQueueAsync.name} (fluentAsync)`, () => {
		it('should return an ordered map instance using function mapper', async () => {
			const result = await fluentAsync([3, 2, 1]).toQueue(identity);

			expect(result).toBeInstanceOf(IterableQueue);
			expect([...result]).toEqual([3, 2, 1]);
		});

		it('should return an ordered map instance using property name', async () => {
			const result = await fluentAsync([{ k: 3 }, { k: 2 }, { k: 1 }]).toQueue(
				'k',
			);

			expect(result).toBeInstanceOf(IterableQueue);
			expect([...result]).toEqual([3, 2, 1]);
		});
	});
});
