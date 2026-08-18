import { fluent } from '@codibre/fluent-iterable';
import { Mapping } from '../types';
import { fillOutFactory } from '../utils/fill-out-factory';
import { IterableStack } from './iterable-stack';

export function toStack<T>(this: Iterable<T>, key: Mapping<T>) {
	const result = new IterableStack<unknown>();
	fluent(this).forEach(fillOutFactory(result, 'push', key));

	return result;
}
