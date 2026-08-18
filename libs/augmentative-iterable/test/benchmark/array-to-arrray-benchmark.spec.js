const { baseToArrayBenchmark } = require('./base-to-arrray-benchmark.spec');
const ITEMS = 100000;
function* intervalBase(init, final) {
  for (let i = init; i <= final; i++) {
    yield i;
  }
}
const baseArray = Array.from(intervalBase(0, ITEMS));
function interval() {
  return baseArray;
}

function arrayToArrayBenchmark() {
  return baseToArrayBenchmark(interval, 'ARRAY');
}

module.exports = {
  arrayToArrayBenchmark,
};
