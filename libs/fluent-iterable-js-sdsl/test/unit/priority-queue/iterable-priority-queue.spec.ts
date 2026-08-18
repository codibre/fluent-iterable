import { PriorityQueue } from 'js-sdsl';
import { IterablePriorityQueue } from '../../../src';

describe(IterablePriorityQueue.name, () => {
	let target: IterablePriorityQueue<number>;
	beforeEach(() => {
		target = new IterablePriorityQueue<number>();
	});

	it('should extend Queue', () => {
		expect(target).toBeInstanceOf(PriorityQueue);
	});

	describe('iteration', () => {
		it('should be iterable', () => {
			target.push(3);
			target.push(1);
			target.push(5);

			const result = [...target];

			expect(result).toEqual([1, 3, 5]);
		});
	});
});
