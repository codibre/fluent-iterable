import { Reducer } from '@codibre/fluent-iterable';
import { OrderedMap } from 'js-sdsl';
import { Mapping } from '../types';
import { getPropFactory } from '../utils/get-prop-factory';

export function fillOutMap<T>(
	key: Mapping<T>,
	value: Mapping<T> | undefined,
	reducer: Reducer<unknown, unknown> | undefined,
	result: OrderedMap<unknown, unknown>,
) {
	const getKey = getPropFactory(key);
	const getValue = getPropFactory(value);
	return (t: T) => {
		const k = getKey(t);
		let v = getValue(t);
		if (reducer) {
			const last = result.getElementByKey(k);
			if (last !== undefined) {
				v = reducer(last, v);
			}
		}
		result.setElement(k, v);
	};
}
