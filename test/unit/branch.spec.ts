import { fluent } from '../../src';

describe('branch', () => {
  const items = [
    { a: 1, b: 'c', id: 1 },
    { a: 1, b: 'd', id: 2 },
    { a: 1, b: 'c', id: 3 },
    { a: 2, b: 'c', id: 4 },
    { a: 2, b: 'c', id: 5 },
    { a: 3, b: 'c', id: 6 },
  ];
  describe('iterable', () => {
    const suite = () => () => {
      describe('sync', () => {
        it('empty', async () => {
          const [a, b, c] = await fluent([]).branch(
            (x) => x.toArray(),
            (x) => x.toArray(),
            (x) => x.toArray(),
          );
          expect(a).toBeEmpty();
          expect(b).toBeEmpty();
          expect(c).toBeEmpty();
        });
        it('not empty', async () => {
          const [a, b, c] = await fluent(items).branch(
            (x) => x.distinctBy('a').toArray(),
            (x) => x.map('id').max(),
            (x) => x.map('id').min(),
          );

          expect(a).toEqual(fluent(items).distinctBy('a').toArray());
          expect(b).toEqual(fluent(items).map('id').max());
          expect(c).toEqual(fluent(items).map('id').min());
        });
        it('should intercalate the steps between every branch', async () => {
          const steps: number[] = [];
          await fluent(items).branch(
            (x) =>
              x
                .execute(() => steps.push(1))
                .distinctBy('a')
                .toArray(),
            (x) =>
              x
                .execute(() => steps.push(2))
                .map('id')
                .max(),
            (x) =>
              x
                .execute(() => steps.push(3))
                .map('id')
                .min(),
          );

          const sequence = [1, 2, 3];
          expect(steps.slice(0, 6)).toEqual([...sequence, ...sequence]);
        });
      });
    };

    describe('async generator', suite());
  });
});
