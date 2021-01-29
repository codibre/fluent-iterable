import { ObjectReadableMock } from 'stream-mock';
import { sortBy } from './../src/sync/sort-by';
import { expect } from 'chai';
import { asc, desc, fluent, fluentAsync } from '../src';

interface Test {
  a: string;
  b: number;
}

describe('sort', () => {
  context('fluent', () => {
    const af = { a: 'f', b: 3 };
    const ac = { a: 'c', b: 5 };
    const ad = { a: 'd', b: 1 };
    const aa = { a: 'a', b: 2 };
    const af2 = { a: 'f', b: 2 };
    const base: Test[] = [af, ac, ad, aa, af2];

    it('empty', () =>
      expect(
        fluent([] as Test[])
          .sortBy((x) => x.a)
          .toArray(),
      ).to.be.empty);
    it('One field ascending', () =>
      expect(
        fluent(base)
          .sortBy((x) => x.a)
          .toArray(),
      ).to.eql([aa, ac, ad, af, af2]));
    it('One field descending', () =>
      expect(
        fluent(base)
          .sortBy(desc((x) => x.a))
          .toArray(),
      ).to.eql([af, af2, ad, ac, aa]));
    it('Two fields both ascending', () =>
      expect(
        fluent(base)
          .sortBy('a', (x) => x.b)
          .toArray(),
      ).to.eql([aa, ac, ad, af2, af]));
    it('Two fields first ascending, second descending', () =>
      expect(
        fluent(base)
          .sortBy(
            asc('a'),
            desc((x) => x.b),
          )
          .toArray(),
      ).to.eql([aa, ac, ad, af, af2]));
    it('Two field both descending', () =>
      expect(
        fluent(base)
          .sortBy(
            desc((x) => x.a),
            desc('b'),
          )
          .toArray(),
      ).to.eql([af, af2, ad, ac, aa]));
    it('Two field first descending, second ascending', () =>
      expect(
        fluent(base)
          .sortBy(
            desc((x) => x.a),
            'b',
          )
          .toArray(),
      ).to.eql([af2, af, ad, ac, aa]));
  });

  context('fluentAsync', () => {
    const af = { a: 'f', b: 3 };
    const ac = { a: 'c', b: 5 };
    const ad = { a: 'd', b: 1 };
    const aa = { a: 'a', b: 2 };
    const af2 = { a: 'f', b: 2 };
    let base: ObjectReadableMock;

    beforeEach(() => {
      base = new ObjectReadableMock([af, ac, ad, aa, af2]);
    });

    it('empty', async () =>
      expect(
        await fluentAsync([] as Test[])
          .sortBy((x) => x.a)
          .toArray(),
      ).to.be.empty);
    it('One field ascending', async () =>
      expect(
        await fluentAsync(base)
          .sortBy((x) => x.a)
          .toArray(),
      ).to.eql([aa, ac, ad, af, af2]));
    it('One field descending', async () =>
      expect(
        await fluentAsync(base)
          .sortBy(desc((x) => x.a))
          .toArray(),
      ).to.eql([af, af2, ad, ac, aa]));
    it('Two fields both ascending', async () =>
      expect(
        await fluentAsync(base)
          .sortBy('a', (x) => x.b)
          .toArray(),
      ).to.eql([aa, ac, ad, af2, af]));
    it('Two fields first ascending, second descending', async () =>
      expect(
        await fluentAsync(base)
          .sortBy(
            'a',
            desc((x) => x.b),
          )
          .toArray(),
      ).to.eql([aa, ac, ad, af, af2]));
    it('Two field both descending', async () =>
      expect(
        await fluentAsync(base)
          .sortBy(
            desc((x) => x.a),
            desc('b'),
          )
          .toArray(),
      ).to.eql([af, af2, ad, ac, aa]));
    it('Two field first descending, second ascending', async () =>
      expect(
        await fluentAsync(base)
          .sortBy(
            desc((x) => x.a),
            'b',
          )
          .toArray(),
      ).to.eql([af2, af, ad, ac, aa]));
  });
});
