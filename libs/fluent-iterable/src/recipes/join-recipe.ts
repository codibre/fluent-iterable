import { identity } from '../utils';
import { AnyMapper } from '../types-internal';
import { AnyIterable } from 'augmentative-iterable';
import { BasicReduceIngredients } from './ingredients';
import { prepare } from '../types-internal/prepare';

export function joinRecipe<T>({ reduce, resolver }: BasicReduceIngredients) {
  return function (
    this: AnyIterable<T>,
    separator: string,
    baseMapper: AnyMapper<T> = identity,
  ) {
    const mapper = prepare(baseMapper);
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
