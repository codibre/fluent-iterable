import { fluent, fluentAsync } from '../../src';

async function* asyncGenerator<T>(list: T[]) {
  for (const item of list) {
    yield item;
  }
}

describe('distinctBy', () => {
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
        it('empty', () =>
          expect(fluent([]).distinctBy().toArray()).toBeEmpty());
        it('single mapper', () => {
          const result = fluent(items).distinctBy('a').toArray();

          expect(result).toEqual([
            { a: 1, b: 'c', id: 1 },
            { a: 2, b: 'c', id: 4 },
            { a: 3, b: 'c', id: 6 },
          ]);
        });
        it('multiple mappers', () => {
          const result = fluent(items)
            .distinctBy('a', (x) => x.b)
            .toArray();

          expect(result).toEqual([
            { a: 1, b: 'c', id: 1 },
            { a: 1, b: 'd', id: 2 },
            { a: 2, b: 'c', id: 4 },
            { a: 3, b: 'c', id: 6 },
          ]);
        });
      });
      describe('async', () => {
        it('empty', async () =>
          expect(await fluent([]).distinctByAsync().toArray()).toBeEmpty());
        it('single mapper', async () => {
          const result = await fluent(items).distinctByAsync('a').toArray();

          expect(result).toEqual([
            { a: 1, b: 'c', id: 1 },
            { a: 2, b: 'c', id: 4 },
            { a: 3, b: 'c', id: 6 },
          ]);
        });
        it('multiple mappers', async () => {
          const result = await fluent(items)
            .distinctByAsync('a', (x) => x.b)
            .toArray();

          expect(result).toEqual([
            { a: 1, b: 'c', id: 1 },
            { a: 1, b: 'd', id: 2 },
            { a: 2, b: 'c', id: 4 },
            { a: 3, b: 'c', id: 6 },
          ]);
        });
      });
    };
    describe('on array', suite());
  });

  describe('asyncIterable', () => {
    const suite = () => () => {
      it('empty', async () =>
        expect(
          await fluentAsync(asyncGenerator([])).distinctBy().toArray(),
        ).toBeEmpty());
      it('single mapper', async () => {
        const result = await fluentAsync(asyncGenerator(items))
          .distinctBy('a')
          .toArray();

        expect(result).toEqual([
          { a: 1, b: 'c', id: 1 },
          { a: 2, b: 'c', id: 4 },
          { a: 3, b: 'c', id: 6 },
        ]);
      });

      it('multiple mappers', async () => {
        const result = await fluentAsync(asyncGenerator(items))
          .distinctBy('a', (x) => x.b)
          .toArray();

        expect(result).toEqual([
          { a: 1, b: 'c', id: 1 },
          { a: 1, b: 'd', id: 2 },
          { a: 2, b: 'c', id: 4 },
          { a: 3, b: 'c', id: 6 },
        ]);
      });
    };

    describe('async generator', suite());
  });
});
