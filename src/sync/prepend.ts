import { getPrepend } from '../common/get-prepend';
import { concat } from './concat';

export const prepend: <T>(
  iterable: Iterable<T>,
  item: T,
) => Iterable<T> = getPrepend(concat);
