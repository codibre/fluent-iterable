import { getConcat } from '../common/get-concat';
import { flatten } from './flatten';

export const concat: <T>(
  ...iterables: Array<Iterable<T>>
) => Iterable<T> = getConcat(flatten);
