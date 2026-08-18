import { Mapping } from '../types';

export function prepare<T>(key: Mapping<T> | undefined, reverse: boolean) {
	if (typeof key === 'boolean') {
		reverse = key;
		key = undefined;
	}
	return { key, reverse };
}
