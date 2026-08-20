import { Predicate } from 'augmentative-iterable';

export interface CompareProvider {
  <T>(a: T): Predicate<T>;
}
