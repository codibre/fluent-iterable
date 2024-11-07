import { fluent, fluentAsync, interval } from '../../src';

async function* toAsync<T>(it: Iterable<T>) {
  for await (const item of it) {
    yield item;
  }
}

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
        it('should work with non resolving branches', async () => {
          const [a, b, c] = await fluent(items).branch(
            (x) => x.distinctBy('a'),
            (x) => x.map('id'),
            (x) => x.map('id'),
          );

          expect(await a.toArray()).toEqual(
            fluent(items).distinctBy('a').toArray(),
          );
          expect(await b.max()).toEqual(fluent(items).map('id').max());
          expect(await c.min()).toEqual(fluent(items).map('id').min());
        });
        it('should work with partial resolved branches', async () => {
          const [a, b, c] = await fluent(items).branch(
            (x) => x.distinctBy('a').toArray(),
            (x) => x.map('id'),
            (x) => x.map('id'),
          );

          expect(a).toEqual(fluent(items).distinctBy('a').toArray());
          expect(await b.max()).toEqual(fluent(items).map('id').max());
          expect(await c.min()).toEqual(fluent(items).map('id').min());
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

          console.log(steps);
          interval(0, 6).forEach((i) =>
            expect(
              steps[i] !== steps[i + 1] || steps[i] !== steps[i + 2],
            ).toBeTrue(),
          );
        });
      });

      describe('async', () => {
        it('empty', async () => {
          const [a, b, c] = await fluentAsync(toAsync([])).branch(
            (x) => x.toArray(),
            (x) => x.toArray(),
            (x) => x.toArray(),
          );
          expect(a).toBeEmpty();
          expect(b).toBeEmpty();
          expect(c).toBeEmpty();
        });
        it('not empty', async () => {
          const [a, b, c] = await fluentAsync(toAsync(items)).branch(
            (x) => x.distinctBy('a').toArray(),
            (x) => x.map('id').max(),
            (x) => x.map('id').min(),
          );

          expect(a).toEqual(fluent(items).distinctBy('a').toArray());
          expect(b).toEqual(fluent(items).map('id').max());
          expect(c).toEqual(fluent(items).map('id').min());
        });
        it('should work with non resolving branches', async () => {
          const [a, b, c] = await fluentAsync(toAsync(items)).branch(
            (x) => x.distinctBy('a'),
            (x) => x.map('id'),
            (x) => x.map('id'),
          );

          expect(await a.toArray()).toEqual(
            fluent(items).distinctBy('a').toArray(),
          );
          expect(await b.max()).toEqual(fluent(items).map('id').max());
          expect(await c.min()).toEqual(fluent(items).map('id').min());
        });
        it('should work with partial resolved branches', async () => {
          const [a, b, c] = await fluentAsync(toAsync(items)).branch(
            (x) => x.distinctBy('a').toArray(),
            (x) => x.map('id'),
            (x) => x.map('id'),
          );

          expect(a).toEqual(fluent(items).distinctBy('a').toArray());
          expect(await b.max()).toEqual(fluent(items).map('id').max());
          expect(await c.min()).toEqual(fluent(items).map('id').min());
        });
        it('should intercalate the steps between every branch', async () => {
          const steps: number[] = [];
          await fluentAsync(toAsync(items)).branch(
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

          console.log(steps);
          interval(0, 6).forEach((i) =>
            expect(
              steps[i] !== steps[i + 1] || steps[i] !== steps[i + 2],
            ).toBeTrue(),
          );
        });
      });
    };

    describe('async generator', suite());
  });
});
