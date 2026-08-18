import { OrderedSet } from 'js-sdsl';
import { BinarySearchTreeSet } from '../../../src';

const proto = BinarySearchTreeSet.prototype;

describe(BinarySearchTreeSet.name, () => {
	let target: BinarySearchTreeSet<number>;
	beforeEach(() => {
		target = new BinarySearchTreeSet<number>();
	});

	it('should extend OrderedSet', () => {
		expect(target).toBeInstanceOf(OrderedSet);
	});

	describe(proto.findLe.name, () => {
		it('should return the greater element lesser than the informed value when no equal value exists', () => {
			target.insert(1);
			target.insert(3);
			target.insert(5);

			const result = target.findLe(4);

			expect(result).toEqual(3);
		});

		it('should return the greater element with matching key when it exists', () => {
			target.insert(1);
			target.insert(3);
			target.insert(5);

			const result = target.findLe(5);

			expect(result).toEqual(5);
		});
	});

	describe(proto.iterateSection.name, () => {
		it('should return an iterable that iterates between the informed min and max', () => {
			target.insert(1);
			target.insert(2);
			target.insert(3);
			target.insert(4);
			target.insert(5);

			const result = [...target.iterateSection(2, 4)];

			expect(result).toEqual([2, 3, 4]);
		});

		it('should return an iterable that iterates between the informed min and max when min is not closed', () => {
			target.insert(1);
			target.insert(2);
			target.insert(3);
			target.insert(4);
			target.insert(5);

			const result = [...target.iterateSection(2, 4, false)];

			expect(result).toEqual([3, 4]);
		});

		it('should return an iterable that iterates between the informed min and max when max is not closed', () => {
			target.insert(1);
			target.insert(2);
			target.insert(3);
			target.insert(4);
			target.insert(5);

			const result = [...target.iterateSection(2, 4, true, false)];

			expect(result).toEqual([2, 3]);
		});

		it('should return an iterable that iterates between the informed min and max when neither min or max are not closed', () => {
			target.insert(1);
			target.insert(2);
			target.insert(3);
			target.insert(4);
			target.insert(5);

			const result = [...target.iterateSection(2, 4, false, false)];

			expect(result).toEqual([3]);
		});
	});
});
