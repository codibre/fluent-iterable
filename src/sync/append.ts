import { getAppend } from '../common/get-append';
import { concat } from './concat';

export const append: <T>(
  iterable: Iterable<T>,
  item: T,
) => Iterable<T> = getAppend(concat);
