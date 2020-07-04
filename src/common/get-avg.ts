import { identity } from '../utils';
import { AnyMapper } from './any-mapper';

interface AvgCalc {
  sum: number;
  count: number;
}

export function getAvg(
  reduceAndMap: Function,
  getSumming: <T>(mapper: AnyMapper<T>) => (current: AvgCalc, next: T) => any,
) {
  return <T>(iterable: Iterable<T>, mapper: any = identity) => {
    const summing = getSumming(mapper);
    return reduceAndMap(
      iterable,
      summing,
      { sum: 0, count: 0 },
      (acc: AvgCalc) => acc.sum / acc.count,
    );
  };
}
