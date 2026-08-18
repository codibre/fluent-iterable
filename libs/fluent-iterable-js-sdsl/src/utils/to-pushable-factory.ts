import { fluent } from '@codibre/fluent-iterable';
import { Mapping, Pushable } from '../types';
import { fillOutFactory } from './fill-out-factory';

export function toPushableFactory<Q extends Pushable<'push'>>(
	cls: new () => Q,
) {
	return function <T>(this: Iterable<T>, key: Mapping<T>) {
		const result: Pushable<'push'> = new cls();
		fluent(this).forEach(fillOutFactory(result, 'push', key));

		return result;
	};
}
