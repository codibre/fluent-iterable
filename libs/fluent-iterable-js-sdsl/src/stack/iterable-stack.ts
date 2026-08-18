import { Stack } from 'js-sdsl';

export class IterableStack<K> extends Stack<K> {
	*[Symbol.iterator]() {
		while (this.length > 0) {
			yield this.pop();
		}
	}
}
