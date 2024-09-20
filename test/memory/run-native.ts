/* eslint-disable no-magic-numbers */
import { interval, truth } from '../../src';

const SIZE = 1000;
const TIMES = 10000;
const arr = Array.from(interval(1, SIZE));
const heapBefore = process.memoryUsage().heapUsed;
const startTime = process.hrtime();
let heapMax = 0;

interval(1, TIMES).forEach((x) => {
  let partition = 0;
  let lastPercent = '';
  let result = arr
    .map((y) => y * 2)
    .filter(truth)
    .reduce(
      (acc, y) => {
        acc[y % 2][1].push(y);
        return acc;
      },
      [
        [0, []],
        [1, []],
      ] as Array<[number, number[]]>,
    )
    .reduce((acc, y) => {
      y[1].forEach((z) => acc.push(z));
      return acc;
    }, [] as number[])
    .reduce(
      (acc, y) => {
        if (partition++ >= 10) {
          acc.push([]);
        }
        acc[acc.length - 1].push(y);
        return acc;
      },
      [[]] as number[][],
    )
    .reduce((acc, y) => {
      y.forEach((z) => acc.push(z));
      return acc;
    }, [] as number[])
    .sort();
  result.push(SIZE + 1);
  result = result.concat(arr);
  result.unshift(0);
  result.forEach((y) => {
    const percent = ((x * 100) / TIMES).toFixed(2).padStart(6, '0');
    if (lastPercent !== percent) {
      lastPercent = percent;
      console.log(`${percent}%: ${x} ${y}`);
    }
    const current = process.memoryUsage().heapUsed;
    if (current > heapMax) {
      heapMax = current;
    }
  });
  result.every(truth);
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
