import { AnyIterable } from 'augmentative-iterable';
import { truth } from '../utils';

export function countRecipe(reduce: Function, filter: Function) {
  return function <T>(this: AnyIterable<T>, predicate: any = truth): any {
    return reduce.call(filter.call(this, predicate), (c: number) => c + 1, 0);
  };
}
