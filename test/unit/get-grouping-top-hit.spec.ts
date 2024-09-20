import { fluent, getGroupingTopHit, interval } from '../../src';
import randomInt from 'random-int';
import Benchmark from 'benchmark';

describe(getGroupingTopHit.name, () => {
  it('should be faster than sort.distinct', () => {
    const base = interval(1, 300)
      .map((_x) => randomInt(1, 1000))
      .toArray();
    const benchmarkSuite = new Benchmark.Suite();
    let result1: number[];
    let result2: number[];
    let log = '';
    benchmarkSuite
      .add('getGroupingTopHit', () => {
        result1 = fluent(base)
          .group(
            (x) => x % 17,
            getGroupingTopHit((a, b) => (a > b ? b : a)),
          )
          .flatMap('values')
          .toArray();
      })
      .add('sort.distinct', () => {
        result2 = fluent(base)
          .map((x) => [x, x % 17] as [number, number])
          .sortBy('1', '0')
          .distinct('1')
          .map('0')
          .toArray();
      })
      .on('cycle', function (event: any) {
        log += `${event.target}\n`;
      })
      .on('complete', function (this: any) {
        console.log(log);
        result1.sort();
        result2.sort();
        expect(result1).toEqual(result2);
      })
      .run();
  });
});
