import { getPartitionComparer } from '../recipes/get-partition-comparer';
import { partitionRecipe } from '../recipes/partition-recipe';
import { Equality } from '../types-base';

function* iterate<T>(arr: Iterable<T>, size: number | Equality<T>) {
  const iterator = arr[Symbol.iterator]();
  const comparer = getPartitionComparer(size);
  let next = iterator.next();
  while (!next.done) {
    yield (function* () {
      let previous = next.value;
      yield previous;
      next = iterator.next();
      while (!next.done && comparer(previous, next.value)) {
        yield next.value;
        previous = next.value;
        next = iterator.next();
      }
    })();
  }
  iterator.return?.call(iterator);
}

export const partition = partitionRecipe(iterate);
