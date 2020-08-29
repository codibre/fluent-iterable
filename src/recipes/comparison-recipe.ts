import { AnyIterable } from 'augmentative-iterable';
import { ComparisonIngredients } from './ingredients';

export function comparisonRecipe({
  count,
  take,
  resolver,
  comparer,
}: ComparisonIngredients) {
  return function <T>(this: AnyIterable<T>, expectedSize: number): any {
    const counted = count.call(take.call(this, expectedSize + 1));
    return resolver(counted, comparer(expectedSize));
  };
}
