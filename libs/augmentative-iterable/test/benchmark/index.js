/* eslint-disable prefer-const */
const fs = require('fs');
const readline = require('readline');
const runProfiling = require('./runProfiling');
const { augmentativeForEachAsync } = require('../../lib/augmentative-async-iterable');
const { arrayToArrayBenchmark } = require('./array-to-arrray-benchmark.spec');
const { iterableToArrayBenchmark } = require('./iterable-to-arrray-benchmark.spec');


function getAsyncIterable(rl) {
  return {
    [Symbol.asyncIterator]() {
      let onError;
      let onClose;
      let onLine;
      let queue = {};
      let error;
      onError = (value) => {
        rl.off('close', onClose);
        rl.off('line', onLine);
        error = value;
      };
      onClose = () => {
        rl.off('error', onError);
        rl.off('line', onLine);
        queue = undefined;
      };
      onLine = (value) => {
        if (queue) {
          const node = { value };
          if (queue.last) {
            queue.last = queue.last.next = node;
          } else {
            queue.last = queue.next = node;
          }
        }
      };
      rl.on('line', onLine);
      rl.once('error', onError);
      rl.once('close', onClose);
      function next() {
        if (!queue) {
          return { done: true };
        }
        if (error) {
          throw error;
        }
        if (queue.next) {
          const { value } = queue.next;
          queue.next = queue.next.next;
          if (!queue.next) {
            queue.last = undefined;
          }
          return {
            value,
          };
        } else {
          rl.off('line', onLine);
          return new Promise((resolve, reject) => {
            let onErrorOnce;
            let onCloseOnce;
            let onLineOnce;
            onErrorOnce = (value) => {
              rl.off('close', onCloseOnce);
              rl.off('line', onLineOnce);
              reject(value);
            };
            onCloseOnce = () => {
              rl.off('error', onErrorOnce);
              rl.off('line', onLineOnce);
              resolve({ done: true });
            };
            onLineOnce = (value) => {
              rl.off('close', onCloseOnce);
              rl.off('error', onErrorOnce);
              rl.on('line', onLine);
              resolve({ value });
            };
            rl.once('line', onLineOnce);
            rl.once('error', onErrorOnce);
            rl.once('close', onCloseOnce);
          });
        }
      }
      return {
        next,
      };
    },
  };
}

(async () => {
  await runProfiling('readline stream interface', () => new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: fs.createReadStream('./test/benchmark/big.txt'),
    });

    let i = 0;
    rl.on('line', () => {
      i += 1;
    });

    rl.on('error', reject);

    rl.on('close', () => {
      console.log(`Read ${i} lines`);
      resolve();
    });
  }));

  await runProfiling('readline async iteration', async () => {
    const rl = readline.createInterface({
        input: fs.createReadStream('./test/benchmark/big.txt'),
      });

      let i = 0;
      for await (const _ of rl) {
        i += 1;
      }
      console.log(`Read ${i} lines`);
  });

  await runProfiling('readline manual readline async iterable', async () => {
    const rl = readline.createInterface({
        input: fs.createReadStream('./test/benchmark/big.txt'),
      });
      const iterable = getAsyncIterable(rl);

      let i = 0;
      for await (const _ of iterable) {
        i += 1;
      }

      console.log(`Read ${i} lines`);
  });

  await runProfiling('readline augmentative-iterable', async () => {
    const rl = readline.createInterface({
        input: fs.createReadStream('./test/benchmark/big.txt'),
      });
      const iterable = getAsyncIterable(rl);

      let i = 0;
      await augmentativeForEachAsync.call(iterable, () => i += 1);

      console.log(`Read ${i} lines`);
   });

  await arrayToArrayBenchmark();
  await iterableToArrayBenchmark();
})();
