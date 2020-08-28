import { identity } from '../utils';
import { AnyMapper } from '../types-internal';
import { AnyIterable } from 'augmentative-iterable';
import { BasicReduceIngredients } from './ingredients';

export function joinRecipe<T>({ reduce, resolver }: BasicReduceIngredients) {
  return function (
    this: AnyIterable<T>,
    separator: string,
    mapper: AnyMapper<T> = identity,
  ) {
    return reduce.call(
      this,
      (current: any, next: any) =>
        resolver(mapper(next), (nextStr: string) =>
          current ? `${current}${separator}${nextStr}` : nextStr,
        ),
      '',
    );
  };
}
