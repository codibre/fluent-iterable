import { AnyIterable } from 'augmentative-iterable';
import { AnyMapper } from '../types-internal';
import { BasicIngredients } from './ingredients';
import { prepare } from '../types-internal/prepare';
import { constant, identity } from '../utils';

export function toSetRecipe({ forEach, resolver }: BasicIngredients) {
  return function toSet<T>(
    this: AnyIterable<T>,
    mapper: AnyMapper<T> = identity,
  ) {
    const preparedMapper = prepare(mapper);
    const set = new Set();
    const bindSet = set.add.bind(set);

    return resolver(
      forEach.call(this, (x) => resolver(preparedMapper(x), bindSet)),
      constant(set),
    );
  };
}
