import { BinaryComparer, asyncResolver } from '../utils';
import { getComparison } from '../recipes';
import { countAsync } from './count-async';
import { takeAsync } from './take-async';

export function getAsyncComparer(comparer: BinaryComparer) {
  return getComparison(countAsync, takeAsync, asyncResolver, comparer);
}
