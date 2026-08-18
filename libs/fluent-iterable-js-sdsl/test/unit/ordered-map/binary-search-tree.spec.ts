import { OrderedMap } from 'js-sdsl';
import { BinarySearchTree } from '../../../src';

const proto = BinarySearchTree.prototype;

describe(BinarySearchTree.name, () => {
	let target: BinarySearchTree<number, unknown>;
	beforeEach(() => {
		target = new BinarySearchTree<number, unknown>();
	});

	it('should extend OrderedMap', () => {
		expect(target).toBeInstanceOf(OrderedMap);
	});

	describe(proto.findLe.name, () => {
		it('should return the greater element lesser than the informed value when no equal value exists', () => {
			target.setElement(1, 'a');
			target.setElement(3, 'b');
			target.setElement(5, 'c');

			const result = target.findLe(4);

			expect(result).toEqual([3, 'b']);
		});

		it('should return the greater element with matching key when it exists', () => {
			target.setElement(1, 'a');
			target.setElement(3, 'b');
			target.setElement(5, 'c');

			const result = target.findLe(5);

			expect(result).toEqual([5, 'c']);
		});
	});

	describe(proto.iterateSection.name, () => {
		it('should return an iterable that iterates between the informed min and max', () => {
			target.setElement(1, 'a');
			target.setElement(2, 'b');
			target.setElement(3, 'c');
			target.setElement(4, 'd');
			target.setElement(5, 'e');

			const result = [...target.iterateSection(2, 4)];

			expect(result).toEqual([
				[2, 'b'],
				[3, 'c'],
				[4, 'd'],
			]);
		});

		it('should return an iterable that iterates between the informed min and max when min is not closed', () => {
			target.setElement(1, 'a');
			target.setElement(2, 'b');
			target.setElement(3, 'c');
			target.setElement(4, 'd');
			target.setElement(5, 'e');

			const result = [...target.iterateSection(2, 4, false)];

			expect(result).toEqual([
				[3, 'c'],
				[4, 'd'],
			]);
		});

		it('should return an iterable that iterates between the informed min and max when max is not closed', () => {
			target.setElement(1, 'a');
			target.setElement(2, 'b');
			target.setElement(3, 'c');
			target.setElement(4, 'd');
			target.setElement(5, 'e');

			const result = [...target.iterateSection(2, 4, true, false)];

			expect(result).toEqual([
				[2, 'b'],
				[3, 'c'],
			]);
		});

		it('should return an iterable that iterates between the informed min and max when neither min or max are not closed', () => {
			target.setElement(1, 'a');
			target.setElement(2, 'b');
			target.setElement(3, 'c');
			target.setElement(4, 'd');
			target.setElement(5, 'e');

			const result = [...target.iterateSection(2, 4, false, false)];

			expect(result).toEqual([[3, 'c']]);
		});
	});
});
