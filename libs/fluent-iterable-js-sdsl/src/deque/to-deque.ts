import { fluent } from '@codibre/fluent-iterable';
import { Mapping } from '../types';
import { fillOutFactory } from '../utils/fill-out-factory';
import { IterableDeque } from './iterable-deque';
import { prepare } from './prepare';

export function toDeque<T>(
	this: Iterable<T>,
	key: Mapping<T> | undefined,
	reverse = false,
) {
	({ key, reverse } = prepare(key, reverse));
	const result = new IterableDeque<unknown>();
	fluent(this).forEach(
		fillOutFactory(result, reverse ? 'pushFront' : 'pushBack', key),
	);

	return result;
}
