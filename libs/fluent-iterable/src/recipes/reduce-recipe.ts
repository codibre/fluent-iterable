import { identity } from '../utils';
import { AnyIterable } from 'augmentative-iterable';
import { AsyncReducer } from '../types/base';
import { ReduceAndMapIngredient } from './ingredients';
import { ResolverType } from '../types-internal';

export function reduceRecipe(
  reduceAndMap: ReduceAndMapIngredient,
  resolver: ResolverType,
) {
  return function <T, R>(
    this: AnyIterable<T>,
    reducer: AsyncReducer<T, R>,
    initial: R,
  ) {
    if (arguments.length > 1) {
      return reduceAndMap.call(this, reducer, initial, identity);
    }
    const iteratorFunc =
      Symbol.iterator in this
        ? this[Symbol.iterator as unknown as keyof typeof this]
        : this[Symbol.asyncIterator as unknown as keyof typeof this];
    const iterator = (
      iteratorFunc as () => Iterator<unknown> | AsyncIterator<unknown>
    ).call(this);
    return resolver(iterator.next(), (first: IteratorResult<unknown>) =>
      reduceAndMap.call(iterator, reducer, first.value, identity),
    );
  };
}
