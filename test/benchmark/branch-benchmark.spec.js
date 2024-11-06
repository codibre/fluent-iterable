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
let min = [];
let max = [];
let avg = [];
let minBranch = [];
let maxBranch = [];
let avgBranch = [];
const errors = new Set();
function getBase() {
  return fluent(interval(1, ITEMS))
    .map(x => x * 2).map(x => x + 2).map(x => x / 2)
    .map(x => x * 3).map(x => x + 3).map(x => x / 3)
    .map(x => x * 4).map(x => x + 4).map(x => x / 4)
    .map(x => x * 5).map(x => x + 5).map(x => x / 5)
    .map(x => x * 6).map(x => x + 6).map(x => x / 6);
}

benchmarkSuite
  .add('separated', () => {
    min = getBase().min();
    max = getBase().max();
    avg = getBase().avg();
  })
  .add('manual branch', () => {
    base = getBase().toArray();
    min = fluent(base).min();
    max = fluent(base).max();
    avg = fluent(base).avg();
  })
  .add('banching', async () => {
    [minBranch, maxBranch, avgBranch] = await getBase()
      .branch(
        x => x.min(),
        x => x.max(),
        x => x.avg(),
      );
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
