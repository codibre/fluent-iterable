import { AnyIterable } from '../common/any-iterable';
import { getContains } from '../common/get-contains';
import { anyAsync } from './any-async';

export const containsAsync: <T>(
  iterable: AnyIterable<T>,
  item: T,
) => Promise<boolean> = getContains(anyAsync);
