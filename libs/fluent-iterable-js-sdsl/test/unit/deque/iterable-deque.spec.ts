import { Deque } from 'js-sdsl';
import { IterableDeque } from '../../../src';

describe(IterableDeque.name, () => {
	let target: IterableDeque<number>;
	beforeEach(() => {
		target = new IterableDeque<number>();
	});

	it('should extend Queue', () => {
		expect(target).toBeInstanceOf(Deque);
	});

	describe('iteration', () => {
		it('should be iterable', () => {
			target.pushBack(1);
			target.pushBack(3);
			target.pushBack(5);

			const result = [...target];

			expect(result).toEqual([1, 3, 5]);
		});
	});
});
