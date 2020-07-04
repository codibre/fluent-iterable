import { AnyIterable } from '../common/any-iterable';
import { getContains } from '../common/get-contains';
import { any } from './any';

export const contains: <T>(
  iterable: AnyIterable<T>,
  item: T,
) => boolean = getContains(any);
