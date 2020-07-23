/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-magic-numbers */
import rxjs = require('rxjs');
import rxjsOp = require('rxjs/operators');
import src = require('../src');
import { expect } from 'chai';

/**
 * This test suite is meant to benchmark fluent-iterable against rxjs, a amazing library that we can use
 * to solve similar problems.
 * Currently, as expected, rxjs have a better performance than this library, but still fluent-iterable is
 * performing very well too and it seems like irrelevant micro differences for most use cases.
 * To run these test, run "npm run test:benchmark in your console command"
 * IMPORTANT!
 * Rxjs is extremely optimized and this tests use an scenario where this library is faster, but this is not
 * the truth overall. The specific case is about the takeWhile operator, which have quite different behaviors
 * between the two libraries: while Rxjs keep iterating over all operators BEFORE the takeWhile, even though
 * in the final result it will be ignored, fluent-iterable, as it's built over the iterable protocol, will
 * just stop to iterate. If you want to try this test without takeWhile, just change the variable below
 * to false.
 */

const TAKE_WHILE_THRESHOLD = 200;
const USE_TAKE_WHILE = true;

describe('fluent x rxjs', () => {
  function executionSuite(repetition: number, total: number, items: number) {
    return () => {
      it(`fluent should be faster than rxjs with ${total} times and ${items} items`, async () => {
        const startsFluent: number[] = [];
        const startsRxjs: number[] = [];
        const execsFluent: number[] = [];
        const execsRxjs: number[] = [];
        let resultFluent: any;
        let resultRxjs: any;

        await src.fluent(src.interval(1, repetition)).forEachAsync(async () => {
          let startRxjs = 0;
          let execRxjs = 0;
          await src.fluent(src.interval(1, total)).forEachAsync(async () => {
            let time = process.hrtime();
            let preparation: rxjs.Observable<any> = rxjs
              .from(src.interval(1, items))
              .pipe(
                rxjsOp.map((x) => x * 7),
                rxjsOp.map((x) => x + 2),
                rxjsOp.map((x) => x / 3),
                rxjsOp.map((x) => x * 4),
              );
            if (USE_TAKE_WHILE) {
              preparation = preparation.pipe(
                rxjsOp.takeWhile((x) => x < TAKE_WHILE_THRESHOLD),
              );
            }
            preparation = preparation.pipe(
              rxjsOp.filter((x) => x % 3 !== 0),
              rxjsOp.toArray(),
            );
            time = process.hrtime(time);
            startRxjs += time[0] + time[1] / 1e9;
            time = process.hrtime();
            resultRxjs = await preparation.toPromise();
            time = process.hrtime(time);
            execRxjs += time[0] + time[1] / 1e9;
          });

          let startFluent = 0;
          let execFluent = 0;
          await src.fluent(src.interval(1, total)).forEachAsync(async () => {
            let time = process.hrtime();
            let prepared = src
              .fluent(src.interval(1, items))
              .map((x) => x * 7)
              .map((x) => x + 2)
              .map((x) => x / 3)
              .map((x) => x * 4);
            if (USE_TAKE_WHILE) {
              prepared = prepared.takeWhile((x) => x < TAKE_WHILE_THRESHOLD);
            }
            prepared = prepared.filter((x) => x % 3);
            time = process.hrtime(time);
            startFluent += time[0] + time[1] / 1e9;
            time = process.hrtime();
            resultFluent = prepared.toArray();
            time = process.hrtime(time);
            execFluent += time[0] + time[1] / 1e9;
          });

          startsRxjs.push(startRxjs);
          startsFluent.push(startFluent);
          execsRxjs.push(execRxjs);
          execsFluent.push(execFluent);
        });

        const avgStartRxjs = src.fluent(startsRxjs).avg();
        const avgStartFluent = src.fluent(startsFluent).avg();
        const avgExecRxjs = src.fluent(execsRxjs).avg();
        const avgExecFluent = src.fluent(execsFluent).avg();
        const avgTotalRxjs = avgStartRxjs + avgExecRxjs;
        const avgTotalFluent = avgStartFluent + avgExecFluent;
        console.log(`Iterations: ${total}`);
        console.log('PREPARATION TIME-------------------------');
        console.log(`Rxjs......: ${avgStartRxjs}`);
        console.log(`Fluent....: ${avgStartFluent}`);
        console.log(`Proportion: ${avgStartFluent / avgStartRxjs}\n`);
        console.log('EXECUTION TIME---------------------------');
        console.log(`Rxjs......: ${avgExecRxjs}`);
        console.log(`Fluent....: ${avgExecFluent}`);
        console.log(`Proportion: ${avgExecFluent / avgExecRxjs}\n`);
        console.log('TOTAL TIME-------------------------------');
        console.log(`Rxjs......: ${avgTotalRxjs}`);
        console.log(`Fluent....: ${avgTotalFluent}`);
        console.log(`Proportion: ${avgTotalFluent / avgTotalRxjs}\n`);
        console.log('-----------------------------------------');
        expect(avgTotalRxjs > avgTotalFluent).to.be.true;
        expect(resultFluent).to.be.eql(resultRxjs);
      });
    };
  }

  describe('Execution for 1 iteration', executionSuite(100, 1, 10000));
  describe('Execution for 10 iteration', executionSuite(100, 10, 10000));
  describe('Execution for 100 iteration', executionSuite(100, 100, 10000));
  describe('Execution for 1000 iteration', executionSuite(100, 1000, 10000));
});
