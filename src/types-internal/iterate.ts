import { AnyIterable } from 'augmentative-iterable';

export interface Iterate {
  (it: any): AnyIterable<any>;
}
