/* eslint-disable no-magic-numbers */
import { interval, fluent, truth, identity } from '../../src';

const SIZE = 1000;
const TIMES = 10000;
const arr = Array.from(interval(1, SIZE));
const heapBefore = process.memoryUsage().heapUsed;
const startTime = process.hrtime();
let heapMax = 0;

interval(1, TIMES).forEach((x) => {
  let lastPercent = '';
  fluent(arr)
    .map((y) => y * 2)
    .filter(truth)
    .group((y) => y % 2)
    .flatten((y) => y.values)
    .partition(10)
    .flatten(identity)
    .sort()
    .append(SIZE + 1)
    .concat(arr)
    .prepend(0)
    .execute((y) => {
      const percent = ((x * 100) / TIMES).toFixed(2).padStart(6, '0');
      if (lastPercent !== percent) {
        lastPercent = percent;
        console.log(`${percent}%: ${x} ${y}`);
      }
      const current = process.memoryUsage().heapUsed;
      if (current > heapMax) {
        heapMax = current;
      }
    })
    .all(truth);
});

const heapAfter = process.memoryUsage().heapUsed;
const endTime = process.hrtime(startTime);

console.log(`HEAP BEFORE.......: ${(heapBefore / 1e6).toFixed(3)} MB`);
console.log(`HEAP AFTER........: ${(heapAfter / 1e6).toFixed(3)} MB`);
console.log(`HEAP MAX..........: ${(heapMax / 1e6).toFixed(3)} MB`);
console.log(
  `DIFFERENCE........: ${((heapAfter - heapBefore) / 1e6).toFixed(3)} MB`,
);
console.log(
  `DIFFERENCE MAX....: ${((heapMax - heapBefore) / 1e6).toFixed(3)} MB`,
);
console.log(
  `TEST TIME.........: ${((endTime[0] + endTime[1] / 1e9) / 60).toFixed(
    3,
  )} minutes`,
);
