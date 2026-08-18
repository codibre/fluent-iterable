import { OrderedSet } from 'js-sdsl';
import { initContainer } from 'js-sdsl/dist/esm/container/ContainerBase';
import { defaultComparer } from '../utils/comparers';

export class BinarySearchTreeSet<K> extends OrderedSet<K> {
	private treeEnd = this.end();

	constructor(
		private comparer: (x: K, y: K) => number = defaultComparer,
		container?: initContainer<K>,
		enableIndex?: boolean,
	) {
		super(container, comparer, enableIndex);
	}

	findLe(key: K): K | undefined {
		const iterator = this.reverseLowerBound(key);

		if (iterator.equals(this.treeEnd)) {
			return undefined;
		}

		return iterator.pointer;
	}

	*iterateSection(min: K, max: K, closedMin = true, closedMax = true) {
		const iterator =
			this[closedMin ? 'reverseUpperBound' : 'reverseLowerBound'](min);

		while (!iterator.equals(this.treeEnd)) {
			const item = iterator.next().pointer;
			const comparison = this.comparer(item, max);
			if ((closedMax && comparison > 0) || (!closedMax && comparison >= 0)) {
				break;
			}

			yield item;
		}
	}
}
