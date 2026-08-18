import { Comparer } from '@codibre/fluent-iterable';
import { defaultComparer } from './comparers';

export function getComparer(
	cmp: Comparer<unknown> | undefined,
): (x: unknown, y: unknown) => number {
	return cmp ?? defaultComparer;
}
