import { KeysOfType } from '@codibre/fluent-iterable/dist/types';

export type Mapping<T> = keyof T | ((t: T) => unknown);
export type Pushable<Method extends string | number | symbol> = {
	[m in Method]: (t: unknown) => unknown;
};
export type AddMethod<O extends object> = KeysOfType<
	O,
	(t: unknown) => unknown
>;
