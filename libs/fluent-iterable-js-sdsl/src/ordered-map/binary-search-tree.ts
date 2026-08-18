import { OrderedMap, OrderedMapIterator } from 'js-sdsl';
import { initContainer } from 'js-sdsl/dist/esm/container/ContainerBase';
import { defaultComparer } from '../utils/comparers';

function getItem<K, V>(iterator: OrderedMapIterator<K, V>): [K, V] {
	return [iterator.pointer[0], iterator.pointer[1]];
}

export class BinarySearchTree<K, V> extends OrderedMap<K, V> {
	private treeEnd = this.end();

	constructor(
		private comparer: (x: K, y: K) => number = defaultComparer,
		container?: initContainer<[K, V]>,
		enableIndex?: boolean,
	) {
		super(container, comparer, enableIndex);
	}

	findLe(key: K): [K, V] | undefined {
		const iterator = this.reverseLowerBound(key);

		if (iterator.equals(this.treeEnd)) {
			return undefined;
		}

		return getItem(iterator);
	}

	*iterateSection(min: K, max: K, closedMin = true, closedMax = true) {
		const iterator =
			this[closedMin ? 'reverseUpperBound' : 'reverseLowerBound'](min);

		while (!iterator.equals(this.treeEnd)) {
			const item = getItem(iterator.next());
			const comparison = this.comparer(item[0], max);
			if ((closedMax && comparison > 0) || (!closedMax && comparison >= 0)) {
				break;
			}

			yield item;
		}
	}
}
