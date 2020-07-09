import { Predicate } from '../types';

export interface CompareProvider {
  <T>(a: T): Predicate<T>;
}
