import { iterateObjProps, iterateObjEntries } from '../../src';

describe('utils.ts', () => {
  it('iterateObjProps()', () => {
    const keys = Array.from(
      iterateObjProps({
        a: 1,
        b: 2,
        c: 3,
      }),
    );

    expect(keys).toEqual(['a', 'b', 'c']);
  });

  it('iterateObjEntries()', () => {
    const keys = Array.from(
      iterateObjEntries({
        a: 1,
        b: 2,
        c: 3,
      }),
    );

    expect(keys).toEqual([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
  });
});
