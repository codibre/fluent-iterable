/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-magic-numbers */
import rxjs = require('rxjs');
import rxjsOp = require('rxjs/operators');
import src = require('../src');
import { expect } from 'chai';

/**
 * This test suite is meant to benchmark fluent-iterable against native, methods, as our primary
 * purpose is to offer something with no drawbacks to use it
 */

function* mapTimes7(iterable: Iterable<number>) {
  for (const item of iterable) {
    yield item * 7;
  }
}
function* mapPlus2(iterable: Iterable<number>) {
  for (const item of iterable) {
    yield item + 2;
  }
}

function* mapDiv3(iterable: Iterable<number>) {
  for (const item of iterable) {
    yield item / 3;
  }
}

function* mapTimes4(iterable: Iterable<number>) {
  for (const item of iterable) {
    yield item * 4;
  }
}

function* mapFilter3(iterable: Iterable<number>) {
  for (const item of iterable) {
    if (item % 3 !== 0) {
      yield item;
    }
  }
}

function* mapTakeWhile(iterable: Iterable<number>) {
  for (const item of iterable) {
    if (item < 10) {
      break;
    }
    yield item;
  }
}

describe.only('fluent x native', () => {
  function executionSuite(repetition: number, total: number, items: number) {
    return () => {
      it(`fluent should be faster than native with ${total} times and ${items} items`, async () => {
        const startsFluent: number[] = [];
        const startsNative: number[] = [];
        const execsFluent: number[] = [];
        const execsNative: number[] = [];

        await src.fluent(src.interval(1, repetition)).forEachAsync(async () => {
          let startNative = 0;
          let execNative = 0;
          await src.fluent(src.interval(1, total)).forEachAsync(async () => {
            let time = process.hrtime();
            let it = src.interval(1, items);
            it = mapTimes7(it);
            it = mapPlus2(it);
            it = mapDiv3(it);
            it = mapTimes4(it);
            it = mapTakeWhile(it);
            it = mapFilter3(it);
            time = process.hrtime(time);
            startNative += time[0] + time[1] / 1e9;
            time = process.hrtime();
            Array.from(it);
            time = process.hrtime(time);
            execNative += time[0] + time[1] / 1e9;
          });

          let startFluent = 0;
          let execFluent = 0;
          await src.fluent(src.interval(1, total)).forEachAsync(async () => {
            let time = process.hrtime();
            const prepared = src
              .fluent(src.interval(1, items))
              .map((x) => x * 7)
              .map((x) => x + 2)
              .map((x) => x / 3)
              .map((x) => x * 4)
              .takeWhile((x) => x < 10)
              .filter((x) => x % 3);
            time = process.hrtime(time);
            startFluent += time[0] + time[1] / 1e9;
            time = process.hrtime();
            prepared.toArray();
            time = process.hrtime(time);
            execFluent += time[0] + time[1] / 1e9;
          });

          startsNative.push(startNative);
          startsFluent.push(startFluent);
          execsNative.push(execNative);
          execsFluent.push(execFluent);
        });

        const avgStartNative = src.fluent(startsNative).avg();
        const avgStartFluent = src.fluent(startsFluent).avg();
        const avgExecNative = src.fluent(execsNative).avg();
        const avgExecFluent = src.fluent(execsFluent).avg();
        const avgTotalNative = avgStartNative + avgExecNative;
        const avgTotalFluent = avgStartFluent + avgExecFluent;
        console.log(`Iterations: ${total}`);
        console.log('PREPARATION TIME-------------------------');
        console.log(`Native......: ${avgStartNative}`);
        console.log(`Fluent....: ${avgStartFluent}`);
        console.log(`Proportion: ${avgStartFluent / avgStartNative}\n`);
        console.log('EXECUTION TIME---------------------------');
        console.log(`Native......: ${avgExecNative}`);
        console.log(`Fluent....: ${avgExecFluent}`);
        console.log(`Proportion: ${avgExecFluent / avgExecNative}\n`);
        console.log('TOTAL TIME-------------------------------');
        console.log(`Native......: ${avgTotalNative}`);
        console.log(`Fluent....: ${avgTotalFluent}`);
        console.log(`Proportion: ${avgTotalFluent / avgTotalNative}\n`);
        console.log('-----------------------------------------');
        expect(avgTotalNative > avgTotalFluent).to.be.true;
      });
    };
  }

  describe('Execution for 1 iteration', executionSuite(100, 1, 10000));
  describe('Execution for 10 iteration', executionSuite(100, 10, 10000));
  describe('Execution for 100 iteration', executionSuite(100, 100, 10000));
  describe('Execution for 1000 iteration', executionSuite(10, 1000, 1000));
});
