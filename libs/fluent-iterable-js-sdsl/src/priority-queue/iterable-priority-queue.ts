import { PriorityQueue } from 'js-sdsl';
import { initContainer } from 'js-sdsl/dist/esm/container/ContainerBase';
import { defaultComparer } from '../utils/comparers';

export class IterablePriorityQueue<K> extends PriorityQueue<K> {
	constructor(
		container?: initContainer<K> | undefined,
		cmp: (x: K, y: K) => number = defaultComparer,
		copy?: boolean | undefined,
	) {
		super(container, cmp, copy);
	}

	*[Symbol.iterator]() {
		while (this.length > 0) {
			yield this.pop();
		}
	}
}
