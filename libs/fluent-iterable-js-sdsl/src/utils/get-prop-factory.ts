import { identity } from '@codibre/fluent-iterable';
import { Mapping } from '../types';

export function getPropFactory<T>(key: Mapping<T> | undefined) {
	if (key === undefined) {
		return identity;
	}
	return typeof key === 'function' ? key : (t: T) => t[key];
}
