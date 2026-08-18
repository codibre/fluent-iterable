const Benchmark = require('benchmark');
const { addMap } = require('../../index');
const ITEMS = 100000;
const MULTIPLIER = 2;

async function baseToArrayBenchmark(baseInterval, title) {
  function interval(start, end) {
    return addMap(baseInterval(start, end), (x) => MULTIPLIER*x);
  }
  await new Promise((resolve) => {
    let log = '';
    const errors = new Set();
    const benchmarkSuite = new Benchmark.Suite();

    benchmarkSuite.clone()
      .add('Array.from', () => {
        Array.from(interval(0, ITEMS));
      })
      .add('for of + push', () => {
        const result = [];
        for (const value of interval(0, ITEMS)) result.push(value);
      })
      .add('for of + fixed array', () => {
        const result = new Array(ITEMS);
        let pos = 0;
        for (const value of interval(0, ITEMS)) result[pos++] = value;
      })
      .add('linked list + for of', () => {
          const list = {};
          let current = list;
          let count = 0;
          for (const value of interval(0, ITEMS)) {
            current.value = value;
            current = current.next = {};
            count++;
          }
          const result = new Array(count);
          current = list;
          for (let i = 0; i < count; i++) {
            result[i] = current.value;
            current = current.next;
          }
      })
      .add('iterator while + push', () => {
        const result = [];
        const iterator = interval(0, ITEMS)[Symbol.iterator]();
        let item;
        while (!(item = iterator.next()).done) result.push(item.value);
      })
      .add('iterator while + fixed array', () => {
        const result = new Array(ITEMS);
        const iterator = interval(0, ITEMS)[Symbol.iterator]();
        let item;
        let i = 0;
        while (!(item = iterator.next()).done) result[i++] = item.value;
      })
      .add('array spread', () => {
        [...interval(0, ITEMS)];
      })
      .on('error', function (event) {
        log += `${event.target} error\n`;
        errors.add(event.target);
        console.log(event);
      })
      .add('linked list + for of', () => {
        const list = {};
        let current = list;
        let count = 0;
        for (const value of interval(0, ITEMS)) {
          current.value = value;
          current = current.next = {};
          count++;
        }
        const result = new Array(count);
        current = list;
        for (let i = 0; i < count; i++) {
          result[i] = current.value;
          current = current.next;
        }
      })
      .add('linked list + iterator while', () => {
        const list = {};
        let current = list;
        let count = 0;
        let item;
        const iterator = interval(0, ITEMS)[Symbol.iterator]();
        while (!(item = iterator.next()).done) {
          current.value = item.value;
          current = current.next = {};
          count++;
        }
        const result = new Array(count);
        current = list;
        for (let i = 0; i < count; i++) {
          result[i] = current.value;
          current = current.next;
        }
      })
      .on('cycle', function (event) {
        if (!errors.has(event.target)) log += `${event.target}\n`;
      })
      .on('complete', function () {
        console.log('####################################################');
        console.log(`${title} TO-ARRAY BENCHMARK`);
        console.log(log);
        console.log('FASTEST:');
        this.filter('fastest').map('name')
          .forEach((x) => {
            if (x) console.log(x);
          });
        console.log('FASTEST (NO FIXED ARRAY):');
        this.filter.call(
          this.filter(x => !x.name.includes('fixed array')),
            'fastest'
          ).map('name')
          .forEach((x) => {
            if (x) console.log(x);
          });
        resolve();
      }).run();
    });
}

module.exports = { baseToArrayBenchmark };
