import { Queue } from 'js-sdsl';
import { IterableQueue } from '../../../src';

describe(IterableQueue.name, () => {
	let target: IterableQueue<number>;
	beforeEach(() => {
		target = new IterableQueue<number>();
	});

	it('should extend Queue', () => {
		expect(target).toBeInstanceOf(Queue);
	});

	describe('iteration', () => {
		it('should be iterable', () => {
			target.push(1);
			target.push(3);
			target.push(5);

			const result = [...target];

			expect(result).toEqual([1, 3, 5]);
		});
	});
});
