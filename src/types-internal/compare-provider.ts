import { Predicate } from '../types-base';

export interface CompareProvider {
  <T>(a: T): Predicate<T>;
}
