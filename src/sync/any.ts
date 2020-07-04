import { Predicate } from '../types';
import { truth } from '../utils';
import { first } from './first';

export function any<T>(
  iterable: Iterable<T>,
  predicate: Predicate<T> = truth as any,
): boolean {
  return first(iterable, predicate) !== undefined;
}
