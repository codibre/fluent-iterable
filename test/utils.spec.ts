import { iterateObjProps, iterateObjEntries } from '../src';
import { expect } from 'chai';

describe('utils.ts', () => {
  describe('iterateObjProps()', () => {
    const keys = Array.from(
      iterateObjProps({
        a: 1,
        b: 2,
        c: 3,
      }),
    );

    expect(keys).to.be.eql(['a', 'b', 'c']);
  });

  describe('iterateObjEntries()', () => {
    const keys = Array.from(
      iterateObjEntries({
        a: 1,
        b: 2,
        c: 3,
      }),
    );

    expect(keys).to.be.eql([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
  });
});
