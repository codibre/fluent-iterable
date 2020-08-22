import { getPartitionComparer } from '../recipes/get-partition-comparer';
import { partitionRecipe } from '../recipes/partition-recipe';
import { Equality } from '../types-base';

async function* iterate<T>(
  arr: AsyncIterable<T>,
  criteria: number | Equality<T>,
) {
  const iterator = arr[Symbol.asyncIterator]();
  const comparer = getPartitionComparer(criteria);
  let next = await iterator.next();
  while (!next.done) {
    yield (async function* () {
      let previous = next.value;
      yield previous;
      next = await iterator.next();
      while (!next.done && comparer(previous, next.value)) {
        yield next.value;
        previous = next.value;
        next = await iterator.next();
      }
    })();
  }
  iterator.return?.call(iterator);
}

export const partitionAsync = partitionRecipe(iterate);
