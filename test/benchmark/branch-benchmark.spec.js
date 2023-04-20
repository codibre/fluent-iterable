const assert = require('assert');
const { fluent } = require('../../dist');
const Benchmark = require('benchmark');

const ITEMS = 100;

const benchmarkSuite = new Benchmark.Suite();
function* interval(init, final) {
  for (let i = init; i <= final; i++) {
    yield i;
  }
}

let log = '';
const errors = new Set();
function getBase() {
  return fluent(interval(1, ITEMS))
    .map(x => x * 2).map(x => x + 2).map(x => x / 2);
}

benchmarkSuite
  .add('separated', () => {
    getBase().min();
    getBase().max();
    getBase().avg();
  })
  .add('manual branch', () => {
    const base = getBase().toArray();
    fluent(base).min();
    fluent(base).max();
    fluent(base).avg();
  })
  .add('banching', async () => {
    await getBase()
      .branch(
        x => x.min(),
        x => x.max(),
        x => x.avg(),
      );
  })
  .add('aggregate', () => {
    getBase()
      .aggregate((x, agg) => ({
        min: agg.min(x),
        max: agg.max(x),
        avg: agg.avg(x),
      }));
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
  })
  .run({ async: true });
