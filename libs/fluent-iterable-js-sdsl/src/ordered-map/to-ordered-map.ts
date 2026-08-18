import { Comparer, fluent, Reducer } from '@codibre/fluent-iterable';
import { Mapping } from '../types';
import { getComparer } from '../utils/get-comparer';
import { BinarySearchTree } from './binary-search-tree';
import { fillOutMap } from './fill-out-map';

export function toOrderedMap<T>(
	this: Iterable<T>,
	key: Mapping<T>,
	value: Mapping<T> | undefined,
	cmp: Comparer<unknown> | undefined,
	reducer: Reducer<unknown, unknown> | undefined,
) {
	if (arguments.length === 2) {
		cmp = arguments[arguments.length - 1];
		value = undefined;
	}
	const result = new BinarySearchTree<unknown, unknown>(getComparer(cmp));
	fluent(this).forEach(fillOutMap(key, value, reducer, result));

	return result;
}
