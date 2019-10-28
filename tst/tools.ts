import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const expect = chai.expect;

function pick<T>(arr: T[], ...indexes: number[]): T[] {
  const res: T[] = [];
  for (const idx of indexes) {
    res.push(arr[idx]);
  }

  return res;
}

export default expect;
export { chai, chaiAsPromised, pick };
