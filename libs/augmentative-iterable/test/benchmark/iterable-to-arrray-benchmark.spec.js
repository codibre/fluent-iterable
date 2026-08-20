const { baseToArrayBenchmark } = require('./base-to-arrray-benchmark.spec');
function* intervalBase(init, final) {
  for (let i = init; i <= final; i++) {
    yield i;
  }
}
const interval = intervalBase;


function iterableToArrayBenchmark() {
  baseToArrayBenchmark(interval, 'ITERABLE');
}

module.exports = {
  iterableToArrayBenchmark,
};
