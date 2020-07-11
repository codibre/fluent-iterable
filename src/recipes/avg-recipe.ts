import { identity } from '../utils';
import { AnyMapper } from '../types-internal';

interface AvgCalc {
  sum: number;
  count: number;
}

export function avgRecipe(
  reduceAndMap: Function,
  getSumming: <T>(mapper: AnyMapper<T>) => (current: AvgCalc, next: T) => any,
) {
  return function <T>(this: Iterable<T>, mapper: any = identity) {
    const summing = getSumming(mapper);
    return reduceAndMap.call(
      this,
      summing,
      { sum: 0, count: 0 },
      (acc: AvgCalc) => acc.sum / acc.count,
    );
  };
}
