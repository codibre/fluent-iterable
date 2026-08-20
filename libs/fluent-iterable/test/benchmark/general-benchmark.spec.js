const { fluent } = require('../../dist');
const rxjs = require('rxjs');
const rxjsOp = require('rxjs/operators');
const { iterate } = require('iterare');
const iterTools = require('iter-tools-es');
const iterOps = require('iter-ops');
const Benchmark = require('benchmark');

const ITEMS = 100000;
const FLAT_FACTOR = 10;
const MULTIPLIER1 = 3;
const MULTIPLIER2 = 2;
const QUOTIENT = 5;
const TAKE = 2000;
const benchmarkSuite = new Benchmark.Suite();
function* interval(init, final) {
  for (let i = init; i <= final; i++) {
    yield i;
  }
}
function interval2(init, final) {
  const items = [];
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
const errors = new Set();

benchmarkSuite
  .add('fluent', () => {
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
      .map((x) => x / MULTIPLIER2)
      .map((x) => x * MULTIPLIER2)
      .map((x) => x / MULTIPLIER2)
      .map((x) => x * MULTIPLIER2)
      .map((x) => interval2(x, x + FLAT_FACTOR))
      .take(TAKE)
      .forEach((x) => x.join(','));
  })
  .add('array operation chain', () => {
    interval2(1, ITEMS)
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
      .map((x) => x / MULTIPLIER2)
      .map((x) => x * MULTIPLIER2)
      .map((x) => x / MULTIPLIER2)
      .map((x) => x * MULTIPLIER2)
      .map((x) => interval2(x, x + FLAT_FACTOR))
      .filter((_x, i) => i < TAKE)
      .map((x) => x.join(','));
  })
  .add('native iterable', () => {
    const it0 = interval2(1, ITEMS);
    const it = map3(take1(filter1(map2(map1(it0)))));
    for (const x of it) {
      x.join(',');
    }
  })
  .add('rxjs', () => {
    return rxjs
      .from(interval2(1, ITEMS))
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
        rxjsOp.map((x) => x / MULTIPLIER2),
        rxjsOp.map((x) => x * MULTIPLIER2),
        rxjsOp.map((x) => x / MULTIPLIER2),
        rxjsOp.map((x) => x * MULTIPLIER2),
        rxjsOp.map((x) => interval2(x, x + FLAT_FACTOR)),
        rxjsOp.take(TAKE),
        rxjsOp.map((x) => x.join(',')),
      )
      .toPromise();
  })
  .add('iter-tools', () => {
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
      iterTools.map((x) => x / MULTIPLIER2),
      iterTools.map((x) => x * MULTIPLIER2),
      iterTools.map((x) => x / MULTIPLIER2),
      iterTools.map((x) => x * MULTIPLIER2),
      iterTools.map((x) => interval2(x, x + FLAT_FACTOR)),
      iterTools.take(TAKE),
      iterTools.forEach((x) => x.join(',')),
    );
  })
  .add('iter-ops', () => {
    return Array.from(iterOps.pipe(
      interval(1, ITEMS),
      iterOps.map((x) => x * MULTIPLIER1),
      iterOps.map((x) => x * MULTIPLIER2),
      iterOps.map((x) => x / MULTIPLIER2),
      iterOps.map((x) => x * MULTIPLIER2),
      iterOps.map((x) => x / MULTIPLIER2),
      iterOps.map((x) => x * MULTIPLIER2),
      iterOps.filter((x) => x % QUOTIENT === 0),
      iterOps.map((x) => x / MULTIPLIER2),
      iterOps.map((x) => x * MULTIPLIER2),
      iterOps.map((x) => x / MULTIPLIER2),
      iterOps.map((x) => x * MULTIPLIER2),
      iterOps.map((x) => x / MULTIPLIER2),
      iterOps.map((x) => x * MULTIPLIER2),
      iterOps.map((x) => x / MULTIPLIER2),
      iterOps.map((x) => x * MULTIPLIER2),
      iterOps.map((x) => interval2(x, x + FLAT_FACTOR)),
      iterOps.take(TAKE),
      iterOps.last((x) => x.join(',')),
    ))[0];
  })
  .add('iterare', () => {
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
      .map((x) => x / MULTIPLIER2)
      .map((x) => x * MULTIPLIER2)
      .map((x) => x / MULTIPLIER2)
      .map((x) => x * MULTIPLIER2)
      .map((x) => interval2(x, x + FLAT_FACTOR))
      .take(TAKE)
      .forEach((x) => x.join(','));
  })
  .add('native builtin iterator', () => {
    (interval(1, ITEMS))
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
      .map((x) => x / MULTIPLIER2)
      .map((x) => x * MULTIPLIER2)
      .map((x) => x / MULTIPLIER2)
      .map((x) => x * MULTIPLIER2)
      .map((x) => interval2(x, x + FLAT_FACTOR))
      .take(TAKE)
      .forEach((x) => x.join(','));
  })
  .on('error', function (event) {
    log += `${event.target} error\n`;
    errors.add(event.target);
  })
  .on('cycle', function (event) {
    if (!errors.has(event.target)) log += `${event.target}\n`;
  })
  .on('complete', function () {
    console.log(log);
    if (!this.filter('fastest').map('name').includes('fluent')) {
      throw new Error('Fluent lost');
    }
  })
  .run();
