import { Stack } from 'js-sdsl';
import { IterableStack } from '../../../src';

describe(IterableStack.name, () => {
	let target: IterableStack<number>;
	beforeEach(() => {
		target = new IterableStack<number>();
	});

	it('should extend Stack', () => {
		expect(target).toBeInstanceOf(Stack);
	});

	describe('iteration', () => {
		it('should be iterable', () => {
			target.push(1);
			target.push(3);
			target.push(5);

			const result = [...target];

			expect(result).toEqual([5, 3, 1]);
		});
	});
});
