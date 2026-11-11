const assert = require('assert');
const { fluent } = require('../../dist');
const Benchmark = require('benchmark');

// Head-to-head benchmark between fluent-iterable and the native
// iterator helpers (Iterator.prototype.map/filter/flatMap/take/drop/
// forEach/some), introduced in V8 and available out of the box from
// Node.js 22 on. Run with: node test/benchmark/iterator-helpers-benchmark.spec.js
const ITEMS = Number(process.env.BENCH_ITEMS) || 100000;
const FLAT_FACTOR = 10;
const MULTIPLIER1 = 3;
const MULTIPLIER2 = 2;
const QUOTIENT = 5;
const TAKE = 2000;
const DROP = 40000;

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

// Each scenario is an equivalent pair of pipelines: the same logical
// work, once with fluent-iterable, once with the native iterator
// helpers. Every pipeline returns a checksum of what it consumed, so
// the benchmarked code is exactly the code whose result is validated.
const scenarios = [
  {
    name: 'map/filter chain',
    fluent: () => {
      let sum = 0;
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
        .forEach((x) => (sum += x.join(',').length));
      return sum;
    },
    helpers: () => {
      let sum = 0;
      interval(1, ITEMS)
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
        .forEach((x) => (sum += x.join(',').length));
      return sum;
    },
  },
  {
    name: 'flatMap pipeline',
    fluent: () => {
      let sum = 0;
      fluent(interval(1, ITEMS))
        .map((x) => x * MULTIPLIER1)
        .filter((x) => x % QUOTIENT === 0)
        .flatMap((x) => interval2(x, x + FLAT_FACTOR))
        .map((x) => x * MULTIPLIER2)
        .take(TAKE)
        .forEach((x) => (sum += x * 31 + x));
      return sum;
    },
    helpers: () => {
      let sum = 0;
      interval(1, ITEMS)
        .map((x) => x * MULTIPLIER1)
        .filter((x) => x % QUOTIENT === 0)
        .flatMap((x) => interval2(x, x + FLAT_FACTOR))
        .map((x) => x * MULTIPLIER2)
        .take(TAKE)
        .forEach((x) => (sum += x * 31 + x));
      return sum;
    },
  },
  {
    name: 'skip/take window',
    fluent: () => {
      let sum = 0;
      fluent(interval(1, ITEMS))
        .map((x) => x * MULTIPLIER2)
        .filter((x) => x % QUOTIENT === 0)
        .skip(DROP)
        .take(TAKE)
        .map((x) => interval2(x, x + FLAT_FACTOR))
        .forEach((x) => (sum += x.join(',').length));
      return sum;
    },
    helpers: () => {
      let sum = 0;
      interval(1, ITEMS)
        .map((x) => x * MULTIPLIER2)
        .filter((x) => x % QUOTIENT === 0)
        .drop(DROP)
        .take(TAKE)
        .map((x) => interval2(x, x + FLAT_FACTOR))
        .forEach((x) => (sum += x.join(',').length));
      return sum;
    },
  },
  {
    name: 'early exit (any/some)',
    fluent: () =>
      fluent(interval(1, ITEMS)).any((x) => x === Math.floor(ITEMS * 0.95)),
    helpers: () =>
      interval(1, ITEMS).some((x) => x === Math.floor(ITEMS * 0.95)),
  },
];

// Sanity check: both sides of every pair must compute the same result.
for (const scenario of scenarios) {
  const fromFluent = scenario.fluent();
  const fromHelpers = scenario.helpers();
  assert.deepStrictEqual(
    fromFluent,
    fromHelpers,
    `Scenario "${scenario.name}" diverged: fluent returned ${fromFluent}, helpers returned ${fromHelpers}`,
  );
}

const benchmarkSuite = new Benchmark.Suite();
for (const scenario of scenarios) {
  benchmarkSuite.add(`fluent (${scenario.name})`, scenario.fluent);
  benchmarkSuite.add(`helpers (${scenario.name})`, scenario.helpers);
}

let log = '';
const errors = new Set();
const results = new Map();

benchmarkSuite
  .on('error', function (event) {
    log += `${event.target} error\n`;
    errors.add(event.target);
  })
  .on('cycle', function (event) {
    if (!errors.has(event.target)) log += `${event.target}\n`;
    results.set(String(event.target).split(' x ')[0], event.target);
  })
  .on('complete', function () {
    console.log(log);
    for (const scenario of scenarios) {
      const fl = results.get(`fluent (${scenario.name})`);
      const hp = results.get(`helpers (${scenario.name})`);
      if (!fl || !hp || errors.has(fl) || errors.has(hp)) {
        console.log(`scenario "${scenario.name}": benchmark failed`);
        continue;
      }
      const ratio = fl.hz / hp.hz;
      const winner = ratio >= 1 ? 'fluent' : 'native helpers';
      console.log(
        `${scenario.name}: fluent ${fl.hz.toFixed(2)} ops/s vs helpers ${hp.hz.toFixed(
          2,
        )} ops/s -> ${winner} by ${(Math.abs(ratio - 1) * 100).toFixed(1)}%`,
      );
    }
  })
  .run({ async: true });
