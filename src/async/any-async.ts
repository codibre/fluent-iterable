import { AsyncPredicate } from '../types';
import { truth } from '../utils';
import { firstAsync } from './first-async';
import { AnyIterable } from '../common/any-iterable';

export async function anyAsync<T>(
  iterable: AnyIterable<T>,
  predicate: AsyncPredicate<T> = truth as any,
): Promise<boolean> {
  return (await firstAsync(iterable, predicate)) !== undefined;
}
