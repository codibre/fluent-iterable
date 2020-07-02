import * as chai from 'chai';

const expect = chai.expect;

function pick<T>(arr: T[], ...indexes: number[]): T[] {
  const res: T[] = [];
  for (const idx of indexes) {
    res.push(arr[idx]);
  }

  return res;
}

function flatMap<T, R>(arr: T[], map: (t: T) => R[]): R[] {
  return arr.reduce((current, next) => current.concat(map(next)), [] as R[]);
}

export default expect;
export { chai, pick, flatMap };
