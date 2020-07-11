import { AnyIterable } from './any-iterable';

export interface Iterate {
  (it: any): AnyIterable<any>;
}
