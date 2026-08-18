import { fluentAsync } from '@codibre/fluent-iterable';
import { Mapping } from '../types';
import { fillOutFactory } from '../utils/fill-out-factory';
import { IterableDeque } from './iterable-deque';
import { prepare } from './prepare';

export async function toDequeAsync<T>(
	this: Iterable<T> | AsyncIterable<T>,
	key: Mapping<T> | undefined,
	reverse = false,
) {
	({ key, reverse } = prepare(key, reverse));
	const result = new IterableDeque<unknown>();
	await fluentAsync(this).forEach(
		fillOutFactory(result, reverse ? 'pushFront' : 'pushBack', key),
	);

	return result;
}
