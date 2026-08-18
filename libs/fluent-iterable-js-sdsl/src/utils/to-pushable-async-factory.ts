import { fluentAsync } from '@codibre/fluent-iterable';
import { Mapping, Pushable } from '../types';
import { fillOutFactory } from './fill-out-factory';

export function toPushableAsyncFactory<Q extends Pushable<'push'>>(
	cls: new () => Q,
) {
	return async function <T>(
		this: Iterable<T> | AsyncIterable<T>,
		key: Mapping<T>,
	) {
		const result: Pushable<'push'> = new cls();
		await fluentAsync(this).forEach(fillOutFactory(result, 'push', key));

		return result;
	};
}
