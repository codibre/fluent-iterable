import { Queue } from 'js-sdsl';

export class IterableQueue<K> extends Queue<K> {
	*[Symbol.iterator]() {
		while (this.length > 0) {
			yield this.pop();
		}
	}
}
