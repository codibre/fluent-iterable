import { Comparer, fluentAsync } from '@codibre/fluent-iterable';
import { getComparer } from './get-comparer';
import { Mapping, Pushable } from '../types';
import { fillOutFactory } from './fill-out-factory';

export function toOrderedContainerAsyncFactory<
	Q extends (cmp: Comparer<unknown>) => Pushable<M>,
	M extends string | number | symbol,
>(cls: Q, method: M) {
	return async function <T>(
		this: Iterable<T> | AsyncIterable<T>,
		key: Mapping<T>,
		cmp: Comparer<unknown> | undefined,
	) {
		const result = cls(getComparer(cmp));
		await fluentAsync(this).forEach(fillOutFactory(result, method, key));

		return result;
	};
}
