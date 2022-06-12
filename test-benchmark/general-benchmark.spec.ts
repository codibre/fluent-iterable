import { expect } from 'chai';
import { fluent } from '../src';
import rxjs = require('rxjs');
import rxjsOp = require('rxjs/operators');
import { iterate } from 'iterare';
import * as iterTools from 'iter-tools-es';
import Benchmark = require('benchmark');

const ITEMS = 100000;
const FLAT_FACTOR = 10;
const MULTIPLIER1 = 3;
const MULTIPLIER2 = 2;
const QUOTIENT = 5;
const TAKE = 1000;
const benchmarkSuite = new Benchmark.Suite();
function* interval(init, final) {
  for (let i = init; i <= final; i++) {
    yield i;
  }
}
function interval2(init, final) {
  const items: any[] = [];
  for (let i = init; i <= final; i++) {
    items.push(i);
  }
  return items;
}
function* map1(it) {
  for (const x of it) {
    yield x * MULTIPLIER1;
  }
}
function* map2(it) {
  for (const x of it) {
    yield x * MULTIPLIER2;
  }
}
function* filter1(it) {
  for (const x of it) {
    if (x % QUOTIENT === 0) {
      yield x;
    }
  }
}
function* take1(it) {
  let count = 0;
  for (const x of it) {
    count++;
    if (count >= TAKE) {
      break;
    }
    yield interval2(x, x + FLAT_FACTOR);
  }
}
function* map3(it) {
  for (const x of it) {
    yield interval2(x, x + FLAT_FACTOR);
  }
}
let log = '';

describe('General benchmark', () => {
  it('fluent should win', async () => {
    benchmarkSuite.add('fluent', () => {
      fluent(interval(1, ITEMS))
        .map((x) => x * MULTIPLIER1)
        .map((x) => x * MULTIPLIER2)
        .map((x) => x / MULTIPLIER2)
        .map((x) => x * MULTIPLIER2)
        .map((x) => x / MULTIPLIER2)
        .map((x) => x * MULTIPLIER2)
        .filter((x) => x % QUOTIENT === 0)
        .map((x) => x / MULTIPLIER2)
        .map((x) => x * MULTIPLIER2)
        .map((x) => x / MULTIPLIER2)
        .map((x) => x * MULTIPLIER2)
        .map((x) => interval2(x, x + FLAT_FACTOR))
        .take(TAKE)
        .forEach((x) => x.join(','));
    }).add('array operation chain', () => {
      interval2(1, ITEMS).map((x) => x * MULTIPLIER1)
        .map((x) => x * MULTIPLIER2)
        .map((x) => x / MULTIPLIER2)
        .map((x) => x * MULTIPLIER2)
        .map((x) => x / MULTIPLIER2)
        .map((x) => x * MULTIPLIER2)
        .filter((x) => x % QUOTIENT === 0)
        .map((x) => x / MULTIPLIER2)
        .map((x) => x * MULTIPLIER2)
        .map((x) => x / MULTIPLIER2)
        .map((x) => x * MULTIPLIER2)
        .map((x) => interval2(x, x + FLAT_FACTOR))
        .filter((_x, i) => i < TAKE)
        .map((x) => x.join(','));
    }).add('native iterable', () => {
      const it0 = interval2(1, ITEMS);
      const it = map3(take1(filter1(map2(map1(it0)))));
      for (const x of it) {
        x.join(',');
      }
    }).add('rxjs', () => {
      return rxjs.from(interval2(1, ITEMS))
        .pipe(
          rxjsOp.map((x) => x * MULTIPLIER1),
          rxjsOp.map((x) => x * MULTIPLIER2),
          rxjsOp.map((x) => x / MULTIPLIER2),
          rxjsOp.map((x) => x * MULTIPLIER2),
          rxjsOp.map((x) => x / MULTIPLIER2),
          rxjsOp.map((x) => x * MULTIPLIER2),
          rxjsOp.filter((x) => x % QUOTIENT === 0),
          rxjsOp.map((x) => x / MULTIPLIER2),
          rxjsOp.map((x) => x * MULTIPLIER2),
          rxjsOp.map((x) => x / MULTIPLIER2),
          rxjsOp.map((x) => x * MULTIPLIER2),
          rxjsOp.map((x) => interval2(x, x + FLAT_FACTOR)),
          rxjsOp.take(TAKE),
          rxjsOp.map((x) => x.join(',')),
        ).toPromise();
    }).add('iter-tools', () => {
      return iterTools.execPipe(
        interval(1, ITEMS),
        iterTools.map((x) => x * MULTIPLIER1),
        iterTools.map((x) => x * MULTIPLIER2),
        iterTools.map((x) => x / MULTIPLIER2),
        iterTools.map((x) => x * MULTIPLIER2),
        iterTools.map((x) => x / MULTIPLIER2),
        iterTools.map((x) => x * MULTIPLIER2),
        iterTools.filter((x) => x % QUOTIENT === 0),
        iterTools.map((x) => x / MULTIPLIER2),
        iterTools.map((x) => x * MULTIPLIER2),
        iterTools.map((x) => x / MULTIPLIER2),
        iterTools.map((x) => x * MULTIPLIER2),
        iterTools.map((x) => interval2(x, x + FLAT_FACTOR)),
        iterTools.take(TAKE),
        iterTools.forEach((x: any) => x.join(',')) as any,
      );
    }).add('iterare', () => {
      iterate(interval(1, ITEMS))
        .map((x) => x * MULTIPLIER1)
        .map((x) => x * MULTIPLIER2)
        .map((x) => x / MULTIPLIER2)
        .map((x) => x * MULTIPLIER2)
        .map((x) => x / MULTIPLIER2)
        .map((x) => x * MULTIPLIER2)
        .filter((x) => x % QUOTIENT === 0)
        .map((x) => x / MULTIPLIER2)
        .map((x) => x * MULTIPLIER2)
        .map((x) => x / MULTIPLIER2)
        .map((x) => x * MULTIPLIER2)
        .map((x) => interval2(x, x + FLAT_FACTOR))
        .take(TAKE)
        .forEach((x) => x.join(','));
    }).on('cycle', function (event) {
      log += `${event.target}\n`;
    }).on('complete', function (this: any) {
      console.log(log);
      expect(this.filter('fastest').map('name')).to.contains('fluent');
    }).run();
  });
});
