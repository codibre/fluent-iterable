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
 */

describe('fluent x rxjs', () => {
  function instantiationSuite(repetition: number, total: number) {
    return () => {
      it(`fluent should be faster than rxjs with ${total} times`, () => {
        const totalsFluent: number[] = [];
        const totalsRxjs: number[] = [];
        const iterableBase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        src.fluent(src.interval(1, repetition)).forEach(() => {
          const startRxjs = process.hrtime();
          src.fluent(src.interval(1, total)).forEach(() => {
            rxjs.from(iterableBase).pipe(
              rxjsOp.map((x) => x * 7),
              rxjsOp.filter((x) => x % 3 !== 0),
            );
          });
          const endRxjs = process.hrtime(startRxjs);
          const totalRxjs = endRxjs[0] + endRxjs[1] / 1e9;

          const startFluent = process.hrtime();
          src.fluent(src.interval(1, total)).forEach(() => {
            src
              .fluent(iterableBase)
              .map((x) => x * 7)
              .filter((x) => x % 3);
          });
          const endFluent = process.hrtime(startFluent);
          const totalFluent = endFluent[0] + endFluent[1] / 1e9;

          totalsFluent.push(totalFluent);
          totalsRxjs.push(totalRxjs);
        });

        const avgRxjs = src.fluent(totalsRxjs).avg();
        const avgFluent = src.fluent(totalsFluent).avg();
        console.log(`Iterations: ${total}`);
        console.log(`Total time Rxjs..: ${avgRxjs}`);
        console.log(`Total time Fluent: ${avgFluent}`);
        console.log(`Proportion.......: ${avgFluent / avgRxjs}`);
        console.log('---------------------------');
        expect(avgRxjs > avgFluent).to.be.true;
      });
    };
  }

  function executionSuite(repetition: number, total: number, items: number) {
    return () => {
      it(`fluent should be faster than rxjs with ${total} times and ${items} items`, async () => {
        const totalsFluent: number[] = [];
        const totalsRxjs: number[] = [];
        let memRxJs = 0;
        let memFluent = 0;
        let itemsProcessedRxjs = 0;
        let exampleValueRxjs: any;
        let itemsProcessedFluent = 0;
        let exampleValueFluent: any;

        await src.fluent(src.interval(1, repetition)).forEachAsync(async () => {
          const startFluent = process.hrtime();

          memRxJs = process.memoryUsage().heapUsed;
          const startRxjs = process.hrtime();
          await src.fluent(src.interval(1, total)).forEachAsync(async () => {
            const array = (await rxjs
              .from(src.interval(1, items))
              .pipe(
                rxjsOp.map((x) => x * 7),
                rxjsOp.filter((x) => x % 3 !== 0),
                rxjsOp.toArray(),
              )
              .toPromise()) as any;
            itemsProcessedRxjs = array.length;
            exampleValueRxjs = array[Math.floor(array.length / 2)];
          });
          const endRxjs = process.hrtime(startRxjs);
          const totalRxjs = endRxjs[0] + endRxjs[1] / 1e9;
          memRxJs = process.memoryUsage().heapUsed - memRxJs;

          memFluent = process.memoryUsage().heapUsed;
          await src.fluent(src.interval(1, total)).forEachAsync(async () => {
            const array = await src
              .fluentAsync(src.interval(1, items))
              .map((x) => x * 7)
              .filter((x) => x % 3)
              .toArray();
            itemsProcessedFluent = array.length;
            exampleValueFluent = array[Math.floor(array.length / 2)];
          });
          const endFluent = process.hrtime(startFluent);
          const totalFluent = endFluent[0] + endFluent[1] / 1e9;
          memFluent = process.memoryUsage().heapUsed - memFluent;

          totalsFluent.push(totalFluent);
          totalsRxjs.push(totalRxjs);
        });

        const avgRxjs = src.fluent(totalsRxjs).avg();
        const avgFluent = src.fluent(totalsFluent).avg();
        console.log(`Iterations: ${total}`);
        console.log(`Items processed for fluent: ${itemsProcessedFluent}`);
        console.log(`Example value for fluent: ${exampleValueFluent}`);
        console.log(`Items processed for Rxjs: ${itemsProcessedRxjs}`);
        console.log(`Example value for Rxjs: ${exampleValueRxjs}`);
        console.log(`Total time Rxjs..: ${avgRxjs}`);
        console.log(`Total mem Rxjs...: ${memRxJs}`);
        console.log(`Total time Fluent: ${avgFluent}`);
        console.log(`Total mem Fluent...: ${memFluent}`);
        console.log(`Proportion.......: ${avgFluent / avgRxjs}`);
        console.log('---------------------------');
        expect(avgRxjs > avgFluent).to.be.true;
      });
    };
  }

  describe('In 1 iteration', instantiationSuite(1000, 1));
  describe('In 10 iteration', instantiationSuite(1000, 10));
  describe('In 100 iteration', instantiationSuite(1000, 100));
  describe('In 1000 iteration', instantiationSuite(1000, 1000));

  describe('Execution for 1 iteration', executionSuite(100, 1, 10000));
  describe('Execution for 10 iteration', executionSuite(100, 10, 10000));
  describe('Execution for 100 iteration', executionSuite(100, 100, 10000));
  describe('Execution for 1000 iteration', executionSuite(10, 1000, 1000));
});
